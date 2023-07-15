import * as z from 'zod';

export const createFeedbackSchema = z.object({
  title: z.string().max(300, {
    message: 'Title must be maximum 300 characters long',
  }),
  description: z.string().max(1000, {
    message: 'Description must be maximum 1000 characters long',
  }),
});
