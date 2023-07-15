import Overview from '@/layouts/dashboard/Overview';
import { Shell } from '@/components/Shell';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import FeedbackOverview from '@/layouts/dashboard/FeedbackOverview';
import TestimonialsOverview from '@/layouts/dashboard/TestimonialsOverview';
import { getFeedbacks } from '@/db/queries';
import { currentUser } from '@clerk/nextjs';

export default async function DashboardPage() {
  const user = await currentUser();
  const feedbacks = await getFeedbacks(user!.id);

  return (
    <Shell>
      <div className='flex flex-wrap justify-between gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
      </div>
      <Tabs defaultValue='overview' className='space-y-4'>
        <TabsList>
          <TabsTrigger value='overview'>Overview</TabsTrigger>
          <TabsTrigger value='testimonials'>Testimonials</TabsTrigger>
          <TabsTrigger value='feedback'>Feedback</TabsTrigger>
        </TabsList>
        <TabsContent value='overview' className='space-y-4'>
          <Overview />
        </TabsContent>
        <TabsContent value='testimonials' className='space-y-4'>
          <TestimonialsOverview />
        </TabsContent>
        <TabsContent value='feedback' className='space-y-4'>
          <FeedbackOverview feedback={feedbacks} user={user!} />
        </TabsContent>
      </Tabs>
    </Shell>
  );
}
