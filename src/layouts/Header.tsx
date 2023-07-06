import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="container mx-auto flex justify-between h-16 items-center p-4">
        <Link href="/">Home</Link>
        <nav className="flex gap-4 items-center">
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">Link</Link>
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">Link</Link>
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">Link</Link>
          <Link href="/" className="text-foreground/60 transition-colors hover:text-foreground/80">Link</Link>
        </nav>
      </div>
    </header>
  );
}