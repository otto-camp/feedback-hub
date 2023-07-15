'use client';

import { useTransition } from 'react';
import { Button } from '../ui/Button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/Dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/Form';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { createFeedbackSchema } from '@/lib/validations/feedback';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '../ui/Input';
import { Loader2 } from 'lucide-react';
import { type User } from '@clerk/nextjs/dist/types/server';
import { createFeedback } from '@/db/queries';
import { toast } from 'sonner';
import { catchError } from '@/utils/catchError';

export type FeedbackInput = z.infer<typeof createFeedbackSchema>;

export default function CreateFeedbackDialog({ user }: { user: User }) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<FeedbackInput>({
    resolver: zodResolver(createFeedbackSchema),
    defaultValues: {
      title: '',
      description: '',
    },
  });
  function onSubmit(data: FeedbackInput) {
    startTransition(async () => {
      try {
        await createFeedback(user.id, {
          ...data,
        });

        toast.success('Feedback added!');
        form.reset();
      } catch (error) {
        catchError(error);
      }
    });
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size='lg'>Create new</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create Feedback</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
            doloremque!
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            className='grid gap-4'
            onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
          >
            <FormField
              control={form.control}
              name='title'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder='title' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name='description'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input placeholder='description' {...field} />
                  </FormControl>
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
      </DialogContent>
    </Dialog>
  );
}
