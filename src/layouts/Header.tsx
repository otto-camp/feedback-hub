import Link from 'next/link';

const data = [
  { href: '/', text: 'Link' },
  { href: '/', text: 'Link' },
  { href: '/', text: 'Link' },
  { href: '/', text: 'Link' },
];

export default function Header() {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container mx-auto flex h-16 items-center justify-between p-4'>
        <Link href='/'>Home</Link>
        <nav className='flex items-center gap-4'>
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
      </div>
    </header>
  );
}
