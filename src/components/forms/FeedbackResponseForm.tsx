'use client';
import { type z } from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { createFeedbackResponseSchema } from '@/lib/validations/feedback';
import { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Textarea } from '../ui/TextArea';
import { Button } from '../ui/Button';
import { Loader2 } from 'lucide-react';
import { createFeedbackResponse } from '@/db/queries';
import { toast } from 'sonner';
import { catchError } from '@/utils/catchError';

export type FeedbackResponseInput = z.infer<
  typeof createFeedbackResponseSchema
>;

export default function FeedbackResponseForm({
  feedbackId,
}: {
  feedbackId: number;
}) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FeedbackResponseInput>({
    resolver: zodResolver(createFeedbackResponseSchema),
    defaultValues: {
      feedback: '',
    },
  });

  function onSubmit(data: FeedbackResponseInput) {
    startTransition(async () => {
      try {
        await createFeedbackResponse(feedbackId, { ...data });

        toast.success('Feedback submited!');
        form.reset();
      } catch (error) {
        catchError(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className='grid gap-4 h-full'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='feedback'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Feedback</FormLabel>
              <FormControl>
                <Textarea
                  placeholder='Your message should be within 100 and 10000 characters'
                  {...field}
                />
              </FormControl>
              <div className='flex justify-end'>
                {field.value.length} characters
              </div>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>
          {isPending && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
          Submit
        </Button>
      </form>
    </Form>
  );
}
