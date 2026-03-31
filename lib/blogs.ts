import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogsDirectory = path.join(process.cwd(), "content/blogs");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  coverImage: string;
  content: string;
  format: "md" | "html";
}

function extractHtmlMeta(html: string): { title: string; excerpt: string } {
  const titleMatch = html.match(/<title>(.*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1] : "";

  // Try to extract first paragraph text as excerpt
  const pMatch = html.match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const excerpt = pMatch
    ? pMatch[1].replace(/<[^>]+>/g, "").trim().slice(0, 200)
    : "";

  return { title, excerpt };
}

function isBlogFile(fileName: string): boolean {
  return fileName.endsWith(".md") || fileName.endsWith(".html");
}

function getSlug(fileName: string): string {
  return fileName.replace(/\.(md|html)$/, "");
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(blogsDirectory).filter(isBlogFile);

  const posts = fileNames.map((fileName) => {
    const slug = getSlug(fileName);
    const fullPath = path.join(blogsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const isHtml = fileName.endsWith(".html");

    if (isHtml) {
      const { title, excerpt } = extractHtmlMeta(fileContents);
      return {
        slug,
        title: title || slug,
        date: "",
        excerpt,
        tags: [] as string[],
        coverImage: "",
        content: fileContents,
        format: "html" as const,
      };
    }

    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      coverImage: data.coverImage || "",
      content,
      format: "md" as const,
    };
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
  // Try .md first, then .html
  const mdPath = path.join(blogsDirectory, `${slug}.md`);
  const htmlPath = path.join(blogsDirectory, `${slug}.html`);

  if (fs.existsSync(mdPath)) {
    const fileContents = fs.readFileSync(mdPath, "utf8");
    const { data, content } = matter(fileContents);
    return {
      slug,
      title: data.title || slug,
      date: data.date || "",
      excerpt: data.excerpt || "",
      tags: data.tags || [],
      coverImage: data.coverImage || "",
      content,
      format: "md",
    };
  }

  if (fs.existsSync(htmlPath)) {
    const fileContents = fs.readFileSync(htmlPath, "utf8");
    const { title, excerpt } = extractHtmlMeta(fileContents);
    return {
      slug,
      title: title || slug,
      date: "",
      excerpt,
      tags: [],
      coverImage: "",
      content: fileContents,
      format: "html",
    };
  }

  return null;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(blogsDirectory)
    .filter(isBlogFile)
    .map(getSlug);
}
