import { InferModel } from 'drizzle-orm';
import {
  int,
  mysqlEnum,
  mysqlTable,
  serial,
  text,
  timestamp,
  tinyint,
  varchar,
} from 'drizzle-orm/mysql-core';

export const feedback = mysqlTable('feedback', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 300 }).notNull(),
  title: varchar('title', { length: 300 }).notNull(),
  description: varchar('description', { length: 1000 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Feedback = InferModel<typeof feedback>;

export const feedbackResponse = mysqlTable('feedback_response', {
  id: serial('id').primaryKey(),
  feedbackId: int('feedback_id').notNull(),
  feedback: text('feedback').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type FeedbackResponse = InferModel<typeof feedbackResponse>;

export const testimonial = mysqlTable('testimonial', {
  id: serial('id').primaryKey(),
  userId: varchar('user_id', { length: 300 }).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Testimonial = InferModel<typeof testimonial>;

export const testimonialResponse = mysqlTable('testimonial_response', {
  id: serial('id').primaryKey(),
  testimonialId: int('testimonial_id').notNull(),
  title: varchar('title', { length: 300 }).notNull(),
  description: varchar('description', { length: 1000 }).notNull(),
  rating: tinyint('rating').notNull(),
  review: varchar('review', { length: 2000 }),
  status: mysqlEnum('status', [
    'approved',
    'pending',
    'rejected',
    'hidden',
    'featured',
    'archived',
    'flagged',
  ]).notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type TestimonialResponse = InferModel<typeof testimonialResponse>;
