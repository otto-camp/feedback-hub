CREATE TABLE `feedback` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` varchar(300) NOT NULL,
	`title` varchar(300) NOT NULL,
	`description` varchar(1000) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `feedback_response` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`feedback_id` int NOT NULL,
	`feedback` text NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `testimonial` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user_id` varchar(300) NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
--> statement-breakpoint
CREATE TABLE `testimonial_response` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`testimonial_id` int NOT NULL,
	`title` varchar(300) NOT NULL,
	`description` varchar(1000) NOT NULL,
	`rating` tinyint NOT NULL,
	`review` varchar(2000),
	`status` enum('approved','pending','rejected','hidden','featured','archived','flagged') NOT NULL,
	`created_at` timestamp DEFAULT (now()),
	`updated_at` timestamp ON UPDATE CURRENT_TIMESTAMP);
