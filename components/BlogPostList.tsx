import striptags from 'striptags'
import React from 'react'
import { PostWithAuthor } from '@/lib/constats'
import Link from 'next/link'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'
import { PenIcon } from 'lucide-react'
import DeletePostButton from './DeletePostButton'

const BlogPostList = ({posts, userPosts=false}: {posts: PostWithAuthor[], userPosts?: boolean}) => {
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3 items'>
        {posts.map((post) => (
            <Card key={post.id} className='font-ubuntu transition-all hover:shadow-lg hover:scale-105 border-none ring-2 ring-zinc-200'>
                <CardHeader>
                    <CardTitle className='truncate text-lg'>
                        <Link key={post.id} href={`/post/${post.id}`}>
                            {post.title}
                        </Link>
                    </CardTitle>
                    <CardDescription>
                        <div className='flex items-start justify-between'>
                            <h2>~{(post.author.firstName)? `${post.author.firstName} ${post.author.lastName? post.author.lastName : ""}` : post.author.email.split('@')[0]}</h2>
                            <h2>{post.createdAt.toUTCString().split(' ').slice(0, 4).join(' ')}</h2>
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent className='mt-3 min-h-24'>
                    <p className='line-clamp-4'>{striptags(post.content)}</p>
                </CardContent>
                {userPosts && <CardFooter>
                    <div className='w-full flex items-center justify-between'>
                        <DeletePostButton id={post.id}/>
                        <Link href={`/edit/${post.id}`}>
                            <Button className='flex items-center justify-center gap-2 font-ubuntu'>
                                <PenIcon />
                                <h2>Edit</h2>
                            </Button>
                        </Link>
                    </div>
                </CardFooter>}
            </Card>
        ))}
    </div>
  )
}

export default BlogPostList