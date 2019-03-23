-- create database
DROP DATABASE IF EXISTS `foods_db`;
CREATE DATABASE `foods_db`;
USE `foods_db`;

-- create tables
CREATE TABLE `foods_tbl` (
	`id` INT AUTO_INCREMENT NOT NULL,
	`food_name` VARCHAR( 255) NOT NULL,
	`calories` INT(5),
	`devoured` BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY ( `id` )
);
