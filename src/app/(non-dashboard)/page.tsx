import { Button } from '@/components/ui/Button';
import FeaturesSection from './FeaturesSection';
import FaqSection from './FaqSection';
import Link from 'next/link';
import Particles from '@/components/Particles';

export default function Home() {
  return (
    <div className='space-y-24'>
      <section className='mx-auto max-w-6xl space-y-12 px-4 py-32 text-center'>
        <h1 className='text-3xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl'>
          Start Your Email Outreach Effortlessly
        </h1>
        <p className='md:text-xl'>
          A compelling headline that grabs attention and emphasizes the value
          proposition of your service.
        </p>
        <Link href='/signin' className='block'>
          <Button size='lg'>Get Started</Button>
        </Link>
      </section>

      <FeaturesSection />

      <section className='relative isolate bg-accent py-32'>
        <Particles className='absolute inset-0 -z-10' quantity={100} />
        <div className='container mx-auto p-4'>
          <h2 className='text-balance text-center text-4xl font-black sm:text-6xl md:text-8xl lg:text-9xl'>
            Save time for your clients
          </h2>
        </div>
      </section>

      <FaqSection />

      <section className='relative isolate bg-accent px-4 py-32 text-center dark:bg-primary-foreground'>
        <Particles className='absolute inset-0 -z-10' quantity={100} />
        <div className='container mx-auto space-y-6 p-4'>
          <h2 className='text-2xl font-bold sm:text-4xl md:text-6xl lg:text-7xl'>
            Get Started
          </h2>
          <p className='mx-auto max-w-lg'>
            Join the email marketing revolution for small businesses and
            experience the incredible results for yourself. Don’t miss out on
            achieving success!
          </p>
          <div className='mx-auto flex w-fit gap-4'>
            <Button>Get Started</Button>
            <Button variant='secondary'>Learn More</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
