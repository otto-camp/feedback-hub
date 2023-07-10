CREATE TABLE `emails` (
	`id` serial AUTO_INCREMENT PRIMARY KEY NOT NULL,
	`user-id` int,
	`sender-email` varchar(200) NOT NULL,
	`subject` varchar(255) NOT NULL,
	`body` text,
	`send-at` timestamp);
