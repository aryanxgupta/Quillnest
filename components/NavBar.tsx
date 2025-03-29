import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton } from '@clerk/nextjs'
import PopOverMenu from './PopOverMenu'

const NavBar = () => {
  return (
    <header className='ring-2 ring-zinc-200 shadow-md px-8 py-2 md:px-16'>
        <div className='flex items-center justify-between mx-auto'>
            <Link href={'/'} className='text-2xl font-ubuntu text-zinc-900 font-semibold'>QuillNest</Link>
            <div className='flex items-center justify-center gap-4'>
                <SignedIn>
                    <div className='max-sm:hidden flex items-center justify-center gap-4'>
                        <Link href={'/dashboard'}>
                            <Button className='bg-zinc-950 font-ubuntu'>Dashboard</Button>
                        </Link>
                        <SignOutButton>
                            <Button variant={'outline'} className='border-zinc-300 font-ubuntu'>Logout</Button>
                        </SignOutButton>
                    </div>
                    <div className='sm:hidden'>
                        <PopOverMenu />
                    </div>
                    <UserButton/>
                </SignedIn>
                <SignedOut>
                    <SignInButton>
                    <Button variant={'outline'} className='border-zinc-300 font-ubuntu'>
                        Sign In
                    </Button>
                    </SignInButton>
                </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default NavBar