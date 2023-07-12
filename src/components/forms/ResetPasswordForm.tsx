'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import { isClerkAPIResponseError, useSignIn } from '@clerk/nextjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import type { z } from 'zod';

import { checkEmailSchema } from '@/lib/validations/Auth';
import { Button } from '@/components/ui/Button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/Form';
import { Input } from '@/components/ui/Input';
import { Loader2 } from 'lucide-react';

type Inputs = z.infer<typeof checkEmailSchema>;

export function ResetPasswordForm() {
  const router = useRouter();
  const { isLoaded, signIn } = useSignIn();
  const [isPending, startTransition] = React.useTransition();

  // react-hook-form
  const form = useForm<Inputs>({
    resolver: zodResolver(checkEmailSchema),
    defaultValues: {
      email: '',
    },
  });

  function onSubmit(data: Inputs) {
    if (!isLoaded) return;

    startTransition(async () => {
      try {
        const firstFactor = await signIn.create({
          strategy: 'reset_password_email_code',
          identifier: data.email,
        });

        if (firstFactor.status === 'needs_first_factor') {
          router.push('/signin/reset-password/step2');
          toast.message('Check your email', {
            description: 'We sent you a 6-digit verification code.',
          });
        }
      } catch (error) {
        const unknownError = 'Something went wrong, please try again.';

        isClerkAPIResponseError(error)
          ? toast.error(error.errors[0]?.longMessage ?? unknownError)
          : toast.error(unknownError);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className='grid gap-4'
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='rodneymullen180@gmail.com' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex justify-between gap-4'>
          <Button variant='secondary' onClick={() => router.push('/signin')}>
            Go Back
          </Button>
          <Button disabled={isPending}>
            {isPending && (
              <Loader2
                className='mr-2 h-4 w-4 animate-spin'
                aria-hidden='true'
              />
            )}
            Continue
            <span className='sr-only'>
              Continue to reset password verification
            </span>
          </Button>
        </div>
      </form>
    </Form>
  );
}
