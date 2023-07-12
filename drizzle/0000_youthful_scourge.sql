CREATE TABLE `feedback` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` int NOT NULL,
	`feedback` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `testimonials` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` int NOT NULL,
	`rating` tinyint NOT NULL,
	`review` varchar(2000),
	`status` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
