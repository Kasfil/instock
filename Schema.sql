CREATE DATABASE IF NOT EXISTS `belanja_core`
  CHARACTER SET = 'utf8mb4'
  COLLATE = 'utf8mb4_bin';

USE `belanja_core`;

CREATE TABLE IF NOT EXISTS `products` (
  `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NOT NULL,
  `brand_id` INT UNSIGNED NULL,
  `description` VARCHAR(255) NOT NULL,
  `prize` DOUBLE(8,2) NOT NULL CHECK (`prize` > 0),
  `added_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `brands` (
  `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(255) NOT NULL,
  `logo` VARCHAR(255) NULL,
  UNIQUE (`brand`),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `tags` (
  `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `tag` VARCHAR(32) NOT NULL,
  UNIQUE (`tag`),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `products_tags` (
  `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `product_id` INT UNSIGNED NOT NULL,
  `tag_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `customers` (
  `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `phone` VARCHAR(17) NOT NULL,
  `phone_code_id` INT UNSIGNED NULL,
  `title` enum('kak', 'bapak', 'ibu') DEFAULT 'kak',
  `name` VARCHAR(128) NOT NULL,
  `join_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE (`phone`),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `phone_code` (
  `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `code` TINYINT UNSIGNED NOT NULL,
  `country` VARCHAR(36) NOT NULL,
  UNIQUE (`code`, `country`),
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS `user_favorit` (
  `_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `user_id` INT UNSIGNED NOT NULL,
  `product_id` INT UNSIGNED NOT NULL,
  `added_at` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`_id`)
) ENGINE=InnoDB;

ALTER TABLE `products`
  ADD CONSTRAINT `FK_products_brands`
    FOREIGN KEY (`brand_id`) REFERENCES `brands`(`_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

ALTER TABLE `products_tags`
  ADD CONSTRAINT `FK_product_tag`
    FOREIGN KEY (`product_id`) REFERENCES `products`(`_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `products_tags`
  ADD CONSTRAINT `FK_tag_product`
    FOREIGN KEY (`tag_id`) REFERENCES `tags`(`_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `customers`
  ADD CONSTRAINT `FK_customer_phone_code`
    FOREIGN KEY (`phone_code_id`) REFERENCES `phone_code`(`_id`)
    ON DELETE SET NULL
    ON UPDATE CASCADE;

ALTER TABLE `user_favorit`
  ADD CONSTRAINT `FK_user_favorit`
    FOREIGN KEY (`user_id`) REFERENCES `users`(`_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;

ALTER TABLE `user_favorit`
  ADD CONSTRAINT `FK_favorit_user`
    FOREIGN KEY (`product_id`) REFERENCES `products`(`_id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE;
