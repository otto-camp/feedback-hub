import { Shell } from '@/components/Shell';
import CreateFeedbackDialog from '@/components/dialogs/CreateFeedbackDialog';
import { Button } from '@/components/ui/Button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/Card';
import { getFeedbacks } from '@/db/queries';
import { absoluteUrl } from '@/utils/absoluteUrl';
import { currentUser } from '@clerk/nextjs';
import { Star } from 'lucide-react';
import Link from 'next/link';

export default async function FeedbackPage() {
  const user = await currentUser();
  const feedback = await getFeedbacks(user?.id!);
  return (
    <Shell>
      <div className='flex flex-wrap justify-between gap-4'>
        <h1 className='text-3xl font-bold tracking-tight'>Dashboard</h1>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total Feedbacks
            </CardTitle>
            <Star className='h-5 w-5' />
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>{feedback.length}</div>
          </CardContent>
        </Card>
      </div>
      <CreateFeedbackDialog userId={user?.id!} />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {feedback.map((feed) => (
          <Link href={absoluteUrl('feedback/' + feed.id.toString())}>
            <Card>
              <CardHeader>
                <CardTitle>{feed.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{feed.description}</p>
              </CardContent>
              <CardFooter className='flex justify-between gap-4'>
                <Button className='w-full'>Edit</Button>
                <Button className='w-full' variant='destructive'>
                  Delete
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </Shell>
  );
}
