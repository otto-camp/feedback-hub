import { Shell } from '@/components/Shell';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='space-y-24'>
      <Shell className='max-w-6xl py-32 text-center xs:space-y-8 md:space-y-12'>
        <h1 className='text-3xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl'>
          Discover the Power of Testimonials
        </h1>
        <p className='md:text-xl'>
          Explore and share your authentic experiences with our products and
          services to help others make informed decisions.
        </p>
        <div className='mx-auto flex gap-4'>
          <Link href='/dashboard/' className='block'>
            <Button size='lg'>Get Started</Button>
          </Link>
          <Link href='/dashboard/' className='block'>
            <Button variant='secondary' size='lg'>
              Learn More
            </Button>
          </Link>
        </div>
      </Shell>
    </div>
  );
}
