import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import Image from 'next/image'
import { Icons } from './Icons'
import Link from 'next/link'
import { Gem } from 'lucide-react'
import { LogoutLink } from '@kinde-oss/kinde-auth-nextjs/server'

interface UserAccountNavProps {

}

const UserAccountNav = async () => {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Button className="rounded-full h-8 w-8 aspect-square bg-slate-400">
          <Avatar className="relative w-8 h-8">
            <div className="relative aspect-square h-full w-full">
              <Image
                fill
                src="/dashboard-preview.jpg"
                alt="profile picture"
                referrerPolicy="no-referrer"
              />
            </div>
            <AvatarFallback>
              <span className="sr-only">santajit</span>
              <Icons.user className="h-4 w-4 text-zinc-900" />
            </AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="bg-white" align="end">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            <p className="font-medium text-sm text-black">santajit</p>
            
              <p className="w-[200px] truncate text-xs text-zinc-700">
                business.santajitpatra@gmail.com
              </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuItem asChild>
            <Link href="/pricing">
              Upgrade <Gem className="text-blue-600 h-4 w-4 ml-1.5" />
            </Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default UserAccountNav
