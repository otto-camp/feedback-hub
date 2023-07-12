import { InferModel } from 'drizzle-orm';
import {
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  tinyint,
  varchar,
} from 'drizzle-orm/mysql-core';

export const feedback = mysqlTable('feedback', {
  id: serial('id').primaryKey(),
  userId: int('user_id').notNull(),
  feedback: text('feedback').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Feedback = InferModel<typeof feedback>;

export const testimonials = mysqlTable('testimonials', {
  id: serial('id').primaryKey(),
  userId: int('user_id').notNull(),
  rating: tinyint('rating').notNull(),
  review: varchar('review', { length: 2000 }),
  status: text('status').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').onUpdateNow(),
});

export type Testimonials = InferModel<typeof testimonials>;
