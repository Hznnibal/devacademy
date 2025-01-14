DROP DATABASE IF EXISTS `example`;
CREATE DATABASE `example` CHARACTER SET utf8mb4 COLLATE utf8mb4_uca1400_ai_ci;
USE `example`;

-- Désactiver les contraintes pour éviter les erreurs lors de l'insertion
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

DROP TABLE IF EXISTS `dept`;
CREATE TABLE `dept` (
  `nodept` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `region_id` varchar(50) NOT NULL,
  PRIMARY KEY (`nodept`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `dept` VALUES 
(10,'finance','1'),
(20,'workshop','2'),
(30,'workshop','3'),
(31,'sales','1'),
(32,'sales','2'),
(33,'sales','3'),
(34,'sales','4'),
(35,'sales','5'),
(41,'distribution','1'),
(42,'distribution','2'),
(43,'distribution','3'),
(44,'distribution','4'),
(45,'distribution','5'),
(50,'administration','1');

DROP TABLE IF EXISTS `employee`;
CREATE TABLE `employee` (
  `emp_id` int(11) NOT NULL AUTO_INCREMENT,
  `last_name` varchar(50) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `hire_date` datetime NOT NULL,
  `nosup` int(11) null,
  `title` varchar(50) NOT NULL,
  `nodep` int(11) NOT NULL,
  `salary` decimal(18,2) NOT NULL,
  `commission` decimal(18,2) DEFAULT NULL,
  PRIMARY KEY (`emp_id`),
  CONSTRAINT `fk_dept` FOREIGN KEY (`nodep`) REFERENCES `dept` (`nodept`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_uca1400_ai_ci;

INSERT INTO `employee` VALUES 
(1, 'smith', 'Adam', '2000-03-26 00:00:00', NULL, 'President', 50, 50000.00, NULL),
(2, 'johnson', 'Emma', '2000-04-15 00:00:00', 1, 'Distribution Manager', 41, 35000.00, NULL),
(3, 'brown', 'Alex', '2000-05-05 00:00:00', 1, 'Sales Manager', 31, 34000.00, NULL),
(4, 'garcia', 'Ana', '2000-05-25 00:00:00', 1, 'Finance Manager', 10, 36000.00, NULL),
(5, 'miller', 'Arthur', '2000-06-14 00:00:00', 1, 'Administrative Manager', 50, 36000.00, NULL),
(6, 'moore', 'Deborah', '2000-07-04 00:00:00', 2, 'Warehouse Chief', 41, 25000.00, NULL),
(7, 'taylor', 'Elsie', '2000-07-24 00:00:00', 2, 'Warehouse Chief', 42, 24000.00, NULL),
(8, 'anderson', 'Hugo', '2000-08-13 00:00:00', 2, 'Warehouse Chief', 43, 23000.00, NULL),
(9, 'martin', 'Henry', '2000-09-02 00:00:00', 2, 'Warehouse Chief', 44, 22000.00, NULL),
(10, 'white', 'Helen', '2000-09-22 00:00:00', 2, 'Warehouse Chief', 45, 21000.00, NULL),
(11, 'thomas', 'Elliott', '2000-10-12 00:00:00', 3, 'Representative', 31, 25000.00, 10.00),
(12, 'walker', 'Olivia', '2000-11-01 00:00:00', 3, 'Representative', 32, 26000.00, 12.00),
(13, 'harris', 'Oscar', '2000-11-21 00:00:00', 3, 'Representative', 33, 27000.00, 10.00),
(14, 'martinez', 'Peter', '2000-12-11 00:00:00', 3, 'Representative', 34, 25000.00, 15.00),
(15, 'clark', 'Quincy', '2000-12-21 00:00:00', 3, 'Representative', 35, 23000.00, 17.00),
(16, 'lewis', 'Samantha', '2000-12-31 00:00:00', 6, 'Secretary', 41, 15000.00, NULL),
(17, 'lee', 'Sophia', '2001-01-10 00:00:00', 6, 'Secretary', 41, 14000.00, NULL),
(18, 'young', 'Theodore', '2001-01-20 00:00:00', 6, 'Secretary', 42, 13000.00, NULL),
(19, 'allen', 'Thomas', '2001-02-09 00:00:00', 6, 'Secretary', 42, 13000.00, NULL),
(20, 'king', 'Tyler', '2001-02-09 00:00:00', 6, 'Secretary', 43, 13000.00, NULL),
(21, 'wright', 'Timothy', '2001-02-19 00:00:00', 6, 'Secretary', 43, 12000.00, NULL),
(22, 'hill', 'Tom', '2001-02-19 00:00:00', 6, 'Secretary', 44, 22500.00, NULL),
(23, 'scott', 'Xavier', '2001-03-01 00:00:00', 6, 'Secretary', 34, 11500.00, NULL),
(24, 'green', 'Yasmine', '2001-03-11 00:00:00', 6, 'Secretary', 45, 11000.00, NULL),
(25, 'adams', 'Yves', '2001-03-21 00:00:00', 6, 'Secretary', 45, 10000.00, NULL);

/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;

