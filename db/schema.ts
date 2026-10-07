import {sqliteTable,text,integer} from 'drizzle-orm/sqlite-core';
export const quotes=sqliteTable('quotes',{id:text('id').primaryKey(),name:text('name').notNull(),phone:text('phone').notNull(),email:text('email').notNull(),state:text('state').notNull(),product:text('product').notNull(),message:text('message').notNull(),consent:integer('consent').notNull(),createdAt:text('created_at').notNull()});
