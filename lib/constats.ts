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

export default mockPosts;