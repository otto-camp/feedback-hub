import { Button } from '@/components/ui/Button';
import FeaturesSection from './FeaturesSection';

export default function Home() {
  return (
    <main className='p-4'>
      <section className='mx-auto max-w-6xl space-y-12 py-32 text-center'>
        <h1 className='text-3xl font-extrabold sm:text-5xl md:text-7xl lg:text-8xl'>
          Start Your Email Outreach Effortlessly
        </h1>
        <p className='md:text-xl'>
          A compelling headline that grabs attention and emphasizes the value
          proposition of your service.
        </p>
        <Button size='lg'>Get Started</Button>
      </section>

      <FeaturesSection />
    </main>
  );
}
