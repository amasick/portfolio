import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { name: "Medium", href: "https://medium.com/@ama_sick" },
    { name: "X / Twitter", href: "https://x.com/ama_sick" },
    { name: "Instagram", href: "https://www.instagram.com/ama_sick/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/in/sde-amankaushik/" },
    { name: "Email", href: "mailto:amankaushik0159@gmail.com" },
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Ventures", href: "#ventures" },
    { name: "Projects", href: "#projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black text-white border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-3">
              Aman Kaushik
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Engineer. Entrepreneur. Blogger. Building intelligent systems
              and sharing the journey with the world.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider mb-3">
              Connect
            </h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-purple-400 text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Aman Kaushik. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
