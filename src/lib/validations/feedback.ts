import * as z from 'zod';

export const createFeedbackSchema = z.object({
  title: z.string().max(300, {
    message: 'Title can be maximum 300 characters long',
  }),
  description: z.string().max(1000, {
    message: 'Description can be maximum 1000 characters long',
  }),
});

export const createFeedbackResponseSchema = z.object({
  feedback: z
    .string()
    .min(100, {
      message: 'Your feedback must be minimum 100 characters long',
    })
    .max(10000, {
      message: 'Your feedback can be maximum 10000 characters long',
    }),
});
