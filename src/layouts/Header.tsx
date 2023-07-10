'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button, buttonVariants } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { User } from '@clerk/nextjs/dist/types/server';
import { LogOut, Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const data = [
  { href: '/about', text: 'About' },
  { href: '/resources', text: 'Resources' },
];

export default function Header({ user }: { user: User | null }) {
  const [isOpen, setIsOpen] = useState(false);

  const initials = `${user?.firstName?.charAt(0) ?? ''} ${
    user?.lastName?.charAt(0) ?? ''
  }`;
  const email =
    user?.emailAddresses?.find((e) => e.id === user.primaryEmailAddressId)
      ?.emailAddress ?? '';

  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between p-4'>
        <Link href='/' className='flex items-center gap-2 text-2xl font-black'>
          <Image src='/logo.svg' alt='Flash Mail' width={32} height={32} />
          <span>Flash Mail</span>
        </Link>
        <nav className='hidden items-center gap-4 lg:flex'>
          {data.map((x) => (
            <Link
              key={x.text}
              href={x.href}
              className='text-foreground/60 transition-colors hover:text-foreground/80'
            >
              {x.text}
            </Link>
          ))}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='secondary'
                  className='relative h-8 w-8 rounded-full'
                >
                  <Avatar className='h-8 w-8'>
                    <AvatarImage
                      src={user.imageUrl}
                      alt={user.username ?? ''}
                    />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {user.firstName} {user.lastName}
                    </p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      {email}
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href='/signout'>
                    <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href='/signin'>
              <div
                className={buttonVariants({
                  size: 'sm',
                })}
              >
                Sign In
                <span className='sr-only'>Sign In</span>
              </div>
            </Link>
          )}
        </nav>
        <div className='flex items-center gap-4 lg:hidden'>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant='ghost'
                className='p-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0'
              >
                <Menu />
                <span className='sr-only'>Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side='right'>
              <nav className='flex flex-col gap-4 lg:hidden'>
                {data.map((x) => (
                  <Link
                    key={x.text}
                    href={x.href}
                    className='text-foreground/60 transition-colors hover:text-foreground/80'
                  >
                    {x.text}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant='secondary'
                  className='relative h-8 w-8 rounded-full'
                >
                  <Avatar className='h-8 w-8'>
                    <AvatarImage
                      src={user.imageUrl}
                      alt={user.username ?? ''}
                    />
                    <AvatarFallback>{initials}</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className='w-56' align='end' forceMount>
                <DropdownMenuLabel className='font-normal'>
                  <div className='flex flex-col space-y-1'>
                    <p className='text-sm font-medium leading-none'>
                      {user.firstName} {user.lastName}
                    </p>
                    <p className='text-xs leading-none text-muted-foreground'>
                      {email}
                    </p>
                  </div>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href='/signout'>
                    <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
                    Log out
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href='/signin'>
              <div
                className={buttonVariants({
                  size: 'sm',
                })}
              >
                Sign In
                <span className='sr-only'>Sign In</span>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
