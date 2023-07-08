'use client';
import { Button } from '@/components/ui/Button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/Sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const data = [
  { href: '/about', text: 'About' },
  { href: '/resources', text: 'Resources' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
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
          <Link href='/start'>
            <Button>Get Started</Button>
          </Link>
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className='lg:hidden'>
            <Button variant='ghost'>
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
              <Link href='/start'>
                <Button className='w-full'>Get Started</Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
