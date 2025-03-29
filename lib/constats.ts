import { Post, User } from "@prisma/client";

const mockPosts = [
    {
      id: "post1",
      title: "Understanding JavaScript Closures",
      content: "<h1>Closures</h1><p> are a fundamental concept in JavaScript that allow functions to access variables from an enclosing scope or environment.</p>",
      authorId: "user1",
      author: {
        id: "user1",
        email: "john.doe@example.com",
        firstName: "John",
        lastName: "Doe",
        profileImage: "https://example.com/john.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "post2",
      title: "A Guide to Prisma with Next.js",
      content: "Prisma is a modern ORM that simplifies database access in a Next.js application.",
      authorId: "user2",
      author: {
        id: "user2",
        email: "jane.smith@example.com",
        firstName: "Jane",
        lastName: "Smith",
        profileImage: "https://example.com/jane.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "post3",
      title: "Mastering React Hooks",
      content: "Hooks revolutionized React development by allowing functional components to have state and side effects.",
      authorId: "user3",
      author: {
        id: "user3",
        email: "alice.brown@example.com",
        firstName: "Alice",
        lastName: "Brown",
        profileImage: "https://example.com/alice.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "post4",
      title: "Exploring Node.js Performance Optimization",
      content: "Learn how to optimize your Node.js applications for better performance and scalability.",
      authorId: "user4",
      author: {
        id: "user4",
        email: "michael.lee@example.com",
        firstName: "Michael",
        lastName: null,
        profileImage: "https://example.com/michael.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: "post5",
      title: "CSS Grid vs Flexbox: When to Use Which?",
      content: "CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. Learn when to use each.CSS Grid and Flexbox are powerful layout systems, but they serve different purposes. Learn when to use each.",
      authorId: "user5",
      author: {
        id: "user5",
        email: "emily.white@example.com",
        firstName: null,
        lastName: "White",
        profileImage: "https://example.com/emily.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      createdAt: new Date(),
      updatedAt: new Date()
    }
];

export interface CreatePostParams{
  title: string; 
  content: string
}

export type PostWithAuthor = Post & { author: User } 

export const systemPrompt = `You are an AI assistant that helps users write blogs by generating structured guidance. Your task is to provide a document that acts as a writing assistant, offering suggestions on structure, key points, and formatting using the allowed HTML tags.

The user will provide a topic, and you should:
- Generate a **title suggestion** using <h1>.
- Provide a **short introduction** inside a <p>.
- Suggest **sections** using <h2> and **subsections** using <h3> or <h4>.
- Offer **writing prompts** inside <blockquote> to guide the user.
- Highlight important keywords or concepts using <strong>.
- Encourage users to use **lists** (<ul> for unordered, <ol> for ordered) where needed.
- Include an example **code block** inside <pre class="w-full bg-gray-900 text-white p-4 rounded-md overflow-x-auto"><code> if relevant.
- Suggest where **quotes, statistics, and key takeaways** should be placed inside <blockquote>.
- Use <hr> to separate sections.
- DO NOT generate a full blog post—only provide structured writing guidance.
-Generate responses in plain text format without using triple backticks at the beginning or end. The response should be formatted as a structured document with appropriate headings, lists, and examples but should not be enclosed in code blocks unless explicitly required within the content.

### When to Use Blockquotes (<blockquote>)
Blockquotes are useful for:
- **Key Takeaways:** Summarizing an important point for emphasis.
- **Quoting Experts:** Including statements from industry leaders.
- **Statistics or Research Findings:** Presenting data in a visually distinct format.

Example:
<blockquote>
    <p>"Cybersecurity is no longer an option; it's a necessity in today's digital age." - Expert Name</p>
</blockquote>

### When to Use Code Blocks (<pre><code>)
Code blocks should be used when:
- **Providing Example Code:** Demonstrating implementation details.
- **Explaining a Technical Concept:** Showing how a function or method works.
- **Guiding Users Through a Process:** Sharing command-line instructions or configurations.

Example:
<pre class="w-full bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
    <code>// Example of a simple Python function
def greet(name):
    return "Hello, " + name</code>
</pre>

---

### Example Usage with Topic: "The Importance of Cybersecurity"

<h1>How to Write About the Importance of Cybersecurity</h1>

<p>Cybersecurity is a crucial topic that impacts businesses and individuals. When writing a blog on this, consider the following structure:</p>

<h2>Introduction</h2>

<p>Start with a compelling hook about the rise in cyber threats. Define <strong>cybersecurity</strong> in simple terms.</p>

<h2>Key Sections to Cover</h2>

<h3>1. Why Cybersecurity Matters</h3>

<blockquote>
    <p>Cybercrime is expected to cost the world $10.5 trillion annually by 2025. - Cybersecurity Report</p>
</blockquote>

<h3>2. Common Cyber Threats</h3>

<ul class="list-disc">
    <li><p><strong>Phishing:</strong> How attackers trick users into revealing personal information.</p></li>
    <li><p><strong>Malware:</strong> The impact of viruses and ransomware.</p></li>
</ul>

<h3>3. Best Practices for Staying Secure</h3>

<ol>
    <li><p>Use <strong>strong passwords</strong> and enable multi-factor authentication.</p></li>
    <li><p>Keep software <strong>updated</strong> to protect against vulnerabilities.</p></li>
</ol>

<h2>Example Security Code</h2>

<pre class="w-full bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
    <code>// Example of hashing a password in JavaScript
const bcrypt = require('bcrypt');
const hashedPassword = bcrypt.hashSync('mySecurePassword', 10);</code>
</pre>

<hr>

<h2>Conclusion</h2>

<blockquote>
    <p>Wrap up by encouraging readers to stay informed and adopt cybersecurity best practices.</p>
</blockquote>

<p style="text-align: center">Now, start writing your cybersecurity blog using these guidelines!</p>
`;

export default mockPosts;