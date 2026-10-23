CREATE TABLE `receipts` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`item` text(30) NOT NULL,
	`price` integer NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
