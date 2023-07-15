import { Shell } from '@/components/Shell';
import FeedbackResponseForm from '@/components/forms/FeedbackResponseForm';
import { getFeedbackById } from '@/db/queries';
import { formatDate } from '@/utils/formatDate';

export default async function FeedbackPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const feedback = (await getFeedbackById(id)).at(0);

  return (
    <Shell variant='markdown' className='prose min-h-screen dark:prose-invert'>
      <time className='text-sm'>{formatDate(feedback?.createdAt!)}</time>
      <h1>{feedback?.title}</h1>
      <p>{feedback?.description}</p>
      <hr />
      <FeedbackResponseForm feedbackId={feedback?.id!} />
    </Shell>
  );
}
