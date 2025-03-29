import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { SignOutButton } from "@clerk/nextjs"
import { Menu } from "lucide-react"
import Link from "next/link"

export default function PopOverMenu() {
  return (
    <Popover>
      <PopoverTrigger asChild className="relative">
        <Button variant="outline">Menu <Menu className="h-3 w-3"/></Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-32">
        <div className="grid grid-cols-1 gap-2 place-content-center place-items-center">
            <Link href={'/dashboard'} className="w-28">
                <Button className='bg-zinc-950 font-ubuntu w-full'>Dashboard</Button>
            </Link>
            <SignOutButton>
                <Button variant={'outline'} className='border-zinc-300 font-ubuntu w-28'>Logout</Button>
            </SignOutButton>
        </div>
      </PopoverContent>
    </Popover>
  )
}
