'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar';
import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { LogOut } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  { href: '/dashboard', text: 'Dashboard', active: false },
  { href: '/dashboard/account', text: 'Account', active: false },
  { href: '/dashboard/feedback', text: 'Feedback', active: false },
  { href: '/dashboard/testimonial', text: 'Testimonial', active: false },
];

export default function Header({
  firstName,
  lastName,
  imageUrl,
  email,
}: {
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  email: string;
}) {
  const initials = `${firstName?.charAt(0) ?? ''} ${lastName?.charAt(0) ?? ''}`;

  return (
    <header className='shadow-primary/15 sticky top-4 z-40 mx-auto max-w-3xl'>
      <div className='mx-4 flex items-center justify-between rounded-full border bg-background px-4 py-2 shadow-lg'>
        <div className='flex gap-6'>
          <Link href='/'>
            <Image
              src='/logo.svg'
              alt='Feedback Hub'
              aria-hidden
              width={32}
              height={32}
            />
            <span className='sr-only'>Feedback Hub</span>
          </Link>
          <nav className='hidden items-center gap-4 md:flex'>
            {data.map((x) => (
              <Link
                href={x.href}
                key={x.href}
                className='text-foreground/60 transition-colors hover:text-foreground/80'
              >
                {x.text}
              </Link>
            ))}
          </nav>
        </div>

        <div className='flex items-center gap-4'>
          <div className='flex flex-col justify-between text-xs font-semibold text-muted-foreground'>
            <span>{firstName + ' ' + lastName}</span>
            <span>{email}</span>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant='secondary'
                className='relative h-8 w-8 rounded-full'
              >
                <Avatar className='h-8 w-8'>
                  <AvatarImage src={imageUrl!} alt={firstName ?? ''} />
                  <AvatarFallback>{initials}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='mt-2 w-52' align='end' forceMount>
              <DropdownMenuItem asChild>
                <Link href='/signout'>
                  <LogOut className='mr-2 h-4 w-4' aria-hidden='true' />
                  Log out
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
