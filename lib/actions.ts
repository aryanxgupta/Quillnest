"use server"
import { auth } from "@clerk/nextjs/server";
import { CreatePostParams, PostWithAuthor } from "./constats";
import { prisma } from "./db";

export type GetPostResponse = {
    success: true,
    message: PostWithAuthor, 
} | {
    success: false, 
    message: string,
}

export async function craetePosts(data: CreatePostParams){
    try {
        console.log("Authenticating")
        const {userId} = await auth()
        if(!userId){
            return { success: false, message: "Unauthorized" }
        }

        console.log("creating post")
        await prisma.post.create({
            data: {
                title: data.title, 
                content: data.content, 
                authorId: userId
            }
        })

        console.log("post created")
        return { success: true, message: "Post created successfully"}
    } catch (error) {
        console.log("Error", error)
        return { success: false, message: error }
    }
}

export async function getPostById(id: string): Promise<GetPostResponse> {
    try {
        const post = await prisma.post.findFirst({
            where: {
                id
            }, 
            include: { author: true }
        })

        if(!post){
            return { success: false, message: "Post doesn't exists"}
        }

        return { success: true, message: post }
    } catch (error) {
        return { success: false, message: error instanceof Error? error.message : "Unable to get post" }
    }
}

export async function updatePost({postId, title, content}: {postId: string, title: string, content: string}) {
    try {
        const updatedPost = await prisma.post.update({
            where: {
                id: postId
            }, 
            data: {
                title, 
                content
            }
        })
        if(!updatedPost) return { success: true, message: "Post not found" }
        return { success: true, message: "Post updated successfully" }
    } catch (error) {
        return { success: false, message: error instanceof Error? error.message : "Something went wrong" }
    }
}

export async function deletePost(postId: string) {
    try {
        const deletedPost = await prisma.post.delete({
            where: {
                id: postId
            }
        })
        if(!deletedPost) return { success: true, message: "Post not found" }
        return { success: true, message: "Post deleted successfully" }
    } catch (error) {
        return { success: false, message: error instanceof Error? error.message : "Something went wrong" }
    }
}

