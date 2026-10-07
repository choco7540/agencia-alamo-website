CREATE TABLE `quotes` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`state` text NOT NULL,
	`product` text NOT NULL,
	`message` text NOT NULL,
	`consent` integer NOT NULL,
	`created_at` text NOT NULL
);
