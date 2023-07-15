import CreateFeedbackDialog from '@/components/dialogs/CreateFeedbackDialog';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Feedback } from '@/db/schema';
import { User } from '@clerk/nextjs/dist/types/server';
import { Star } from 'lucide-react';

export default function FeedbackOverview({
  feedback,
  user,
}: {
  feedback: Feedback[];
  user: User;
}) {
  return (
    <>
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
      <CreateFeedbackDialog user={user} />
    </>
  );
}
