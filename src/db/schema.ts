import { InferModel } from 'drizzle-orm';
import {
  int,
  mysqlTable,
  serial,
  text,
  timestamp,
  varchar,
} from 'drizzle-orm/mysql-core';

export const emails = mysqlTable('emails', {
  id: serial('id').primaryKey(),
  userId: int('user-id'),
  senderEmail: varchar('sender-email', { length: 200 }).notNull(),
  subject: varchar('subject', { length: 255 }).notNull(),
  body: text('body'),
  sendAt: timestamp('send-at'),
});

export type Emails = InferModel<typeof emails>;
