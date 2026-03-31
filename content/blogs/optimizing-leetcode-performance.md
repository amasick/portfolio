---
title: "How I Reached Knight Rating on LeetCode - Tips and Strategies"
date: "2024-11-20"
excerpt: "Sharing my journey to the top 2% on LeetCode, including problem-solving strategies and practice routines."
tags: ["LeetCode", "Competitive Programming", "DSA", "C++"]
coverImage: ""
---

## My LeetCode Journey

Reaching Knight rating on LeetCode (top 2% globally) wasn't an overnight achievement. It took consistent practice, strategic problem selection, and a deep understanding of data structures and algorithms.

## Key Strategies

### 1. Master the Fundamentals First

Before diving into hard problems, ensure you have a solid foundation in:

- **Arrays and Strings** - Two pointers, sliding window
- **Trees and Graphs** - BFS, DFS, topological sort
- **Dynamic Programming** - Memoization, tabulation
- **Binary Search** - On answer space, not just arrays

### 2. Practice by Pattern, Not by Difficulty

Instead of randomly solving problems, group them by patterns:

```
Week 1: Two Pointers & Sliding Window
Week 2: Binary Search variations
Week 3: Graph algorithms (BFS/DFS)
Week 4: Dynamic Programming
```

### 3. Time Your Practice

During contests, time management is crucial. My approach:

- **Easy problems**: 5-8 minutes
- **Medium problems**: 15-20 minutes
- **Hard problems**: 25-35 minutes

### 4. Learn from Contest Solutions

After every contest, study the editorial and top solutions. Understanding different approaches to the same problem expands your toolkit.

## C++ Tips for Competitive Programming

```cpp
// Fast I/O
ios_base::sync_with_stdio(false);
cin.tie(NULL);

// Useful macros
#define all(v) v.begin(), v.end()
#define pb push_back
#define sz(x) (int)(x).size()

// Common templates
template<typename T>
void print_vec(vector<T>& v) {
    for(auto& x : v) cout << x << " ";
    cout << endl;
}
```

## The Mental Game

Competitive programming is as much about mindset as it is about skill:

- **Don't get discouraged** by hard problems
- **Review mistakes** after each contest
- **Stay consistent** - even 1-2 problems daily adds up
- **Participate in contests** regularly to build pressure tolerance

## Conclusion

The path to Knight on LeetCode is a marathon, not a sprint. Focus on understanding patterns, practice consistently, and most importantly, enjoy the problem-solving process.
