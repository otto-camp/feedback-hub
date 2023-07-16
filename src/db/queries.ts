'use server';

import { eq, sql } from 'drizzle-orm';
import { db } from '.';
import { feedback, feedbackResponse } from './schema';
import { type FeedbackInput } from '@/components/dialogs/CreateFeedbackDialog';
import { type FeedbackResponseInput } from '@/components/forms/FeedbackResponseForm';

export const getFeedbacks = async (userId: string) => {
  return await db.select().from(feedback).where(eq(feedback.userId, userId));
};

export const getFeedbackById = async (id: number) => {
  return await db.select().from(feedback).where(eq(feedback.id, id));
};

export const getFeedbackCount = async (userId: string) => {
  return await db
    .select({ count: sql<number>`count(*)` })
    .from(feedback)
    .where(eq(feedback.userId, userId));
};

export const createFeedback = async (userId: string, value: FeedbackInput) => {
  return await db.insert(feedback).values({
    userId: userId,
    title: value.title,
    description: value.description,
  });
};

export const createFeedbackResponse = async (
  feedbackId: number,
  value: FeedbackResponseInput
) => {
  return await db.insert(feedbackResponse).values({
    feedbackId: feedbackId,
    feedback: value.feedback,
  });
};
