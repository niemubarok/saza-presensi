-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 03, 2023 at 05:04 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 5.6.38

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `saza_presensi`
--

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema`
--

CREATE TABLE `adonis_schema` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL,
  `migration_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adonis_schema`
--

INSERT INTO `adonis_schema` (`id`, `name`, `batch`, `migration_time`) VALUES
(8, 'database/migrations/166460970874_classes', 1, '2022-12-16 07:23:49'),
(9, 'database/migrations/1663901564563_teachers', 1, '2022-12-16 07:23:49'),
(10, 'database/migrations/1664609635926_students', 1, '2022-12-16 07:23:49'),
(11, 'database/migrations/1664609720339_settings', 1, '2022-12-16 07:23:49'),
(12, 'database/migrations/1664609732551_student_activities', 1, '2022-12-16 07:23:49');

-- --------------------------------------------------------

--
-- Table structure for table `adonis_schema_versions`
--

CREATE TABLE `adonis_schema_versions` (
  `version` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `adonis_schema_versions`
--

INSERT INTO `adonis_schema_versions` (`version`) VALUES
(2);

-- --------------------------------------------------------

--
-- Table structure for table `classes`
--

CREATE TABLE `classes` (
  `id` varchar(10) NOT NULL,
  `label` varchar(60) NOT NULL,
  `description` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `classes`
--

INSERT INTO `classes` (`id`, `label`, `description`) VALUES
('asrm', 'Asrama', 'general'),
('klsix', 'Kelas IX', '-'),
('klsvii', 'Kelas VII', '-'),
('klsviii', 'Kelas VIII', '-'),
('klsx', 'Kelas X', '-'),
('klsxi', 'Kelas XI', '-'),
('klsxii', 'Kelas XII', '-'),
('msjd', 'Masjid', 'general');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `value` varchar(60) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `settings`
--

INSERT INTO `settings` (`id`, `name`, `value`) VALUES
(1, 'toleransi', '15'),
(2, 'baseUrl', 'http://localhost:3333');

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `nis` varchar(20) NOT NULL,
  `class_id` varchar(10) DEFAULT NULL,
  `name` varchar(60) DEFAULT NULL,
  `gender` enum('L','P') DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `phone_1` bigint(20) DEFAULT NULL,
  `phone_2` bigint(20) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `status` enum('active','inactive') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`nis`, `class_id`, `name`, `gender`, `birthdate`, `phone_1`, `phone_2`, `photo`, `status`) VALUES
('0009107838', 'klsviii', 'Rian Rizal Maulana', 'L', '1992-09-20', 85524914191, 85523123123, 'test', 'active'),
('0012421387', 'klsvii', 'Husni Mubarok', 'L', '1992-09-20', 85524914191, 85523123123, 'test', 'active'),
('320322', 'klsvii', 'Arina Muntazah', 'P', '1992-08-26', 85524914191, 85523123123, 'test', 'active');

-- --------------------------------------------------------

--
-- Table structure for table `student_activities`
--

CREATE TABLE `student_activities` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(60) DEFAULT NULL,
  `day` varchar(15) DEFAULT NULL,
  `start` varchar(8) DEFAULT NULL,
  `end` varchar(8) DEFAULT NULL,
  `order` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_activities`
--

INSERT INTO `student_activities` (`id`, `name`, `day`, `start`, `end`, `order`) VALUES
(1, 'Jamaah Subuh', 'Daily', '04:20:00', '05:00:00', 1),
(2, 'Pengajian Subuh', 'Daily', '05:30:00', '07:00:00', 2),
(3, 'Sekolah Pagi', 'Daily', '10:08:06', '12:10:00', 3),
(4, 'Jamaah Zuhur', 'Daily', '12:20:00', '12:59:00', 4),
(5, 'Jamaah Jum\'at', 'Jum\'at', '12:20:00', '12:59:00', 4),
(6, 'Sekolah Siang', 'Daily', '13:00:00', '14:20:00', 5),
(7, 'Jamaah Ashar', 'Daily', '15:16:30', '17:00:00', 6),
(8, 'Jamaah Maghrib', 'Daily', '17:00:00', '19:20:00', 7),
(9, 'Muhadhoroh', 'Daily', '19:40:00', '21:30:00', 8),
(10, 'Muwajahah', 'Daily', '19:41:00', '21:30:00', 8),
(11, 'Tidur', 'Daily', '22:05:00', '02:20:00', 10);

-- --------------------------------------------------------

--
-- Table structure for table `student_attendances`
--

CREATE TABLE `student_attendances` (
  `id` int(10) UNSIGNED NOT NULL,
  `student_nis` varchar(20) DEFAULT NULL,
  `class_id` varchar(10) DEFAULT NULL,
  `activity_id` int(11) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `in` time DEFAULT NULL,
  `status` varchar(15) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_attendances`
--

INSERT INTO `student_attendances` (`id`, `student_nis`, `class_id`, `activity_id`, `date`, `in`, `status`) VALUES
(1, '0012421387', 'klsvii', 1, '2022-10-27', '08:00:00', 'late'),
(2, '320322', 'klsviii', 1, '2022-10-27', '08:00:00', 'ontime'),
(3, '0009107838', 'klsix', 2, '2022-10-27', '08:00:00', 'ontime'),
(4, '0012421387', 'msjd', 3, '2022-12-22', '10:06:11', 'late'),
(5, '0012421387', 'klsvii', 7, '2023-01-17', '16:39:09', 'late'),
(6, '0012421387', 'klsvii', 7, '2023-01-17', '16:43:12', 'late');

-- --------------------------------------------------------

--
-- Table structure for table `student_permissions`
--

CREATE TABLE `student_permissions` (
  `id` int(10) UNSIGNED NOT NULL,
  `student_nis` varchar(20) DEFAULT NULL,
  `reason` enum('sakit','pulang','kegiatan','bolos') DEFAULT NULL,
  `from` date DEFAULT NULL,
  `until` date DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `student_permissions`
--

INSERT INTO `student_permissions` (`id`, `student_nis`, `reason`, `from`, `until`, `description`) VALUES
(1, '0012421387', 'pulang', '2022-12-11', '2022-12-15', 'santri pulang kampung');

-- --------------------------------------------------------

--
-- Table structure for table `teachers`
--

CREATE TABLE `teachers` (
  `nip` varchar(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `gender` enum('L','P') DEFAULT NULL,
  `birthdate` date DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `photo` varchar(255) DEFAULT NULL,
  `status` enum('aktif','inactive') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `teachers`
--

INSERT INTO `teachers` (`nip`, `name`, `gender`, `birthdate`, `phone`, `photo`, `status`) VALUES
('0009107837', 'Arina', 'P', '1992-08-26', 851511315, 'tes', 'aktif'),
('0009107839', 'Rizal', 'L', '1996-03-26', 851511315, 'tes', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `classes`
--
ALTER TABLE `classes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`nis`),
  ADD KEY `students_class_id_foreign` (`class_id`);

--
-- Indexes for table `student_activities`
--
ALTER TABLE `student_activities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_attendances`
--
ALTER TABLE `student_attendances`
  ADD PRIMARY KEY (`id`),
  ADD KEY `student_attendances_student_nis_foreign` (`student_nis`),
  ADD KEY `student_attendances_class_id_foreign` (`class_id`);

--
-- Indexes for table `student_permissions`
--
ALTER TABLE `student_permissions`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `teachers`
--
ALTER TABLE `teachers`
  ADD PRIMARY KEY (`nip`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `adonis_schema`
--
ALTER TABLE `adonis_schema`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student_activities`
--
ALTER TABLE `student_activities`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `student_attendances`
--
ALTER TABLE `student_attendances`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `student_permissions`
--
ALTER TABLE `student_permissions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `students`
--
ALTER TABLE `students`
  ADD CONSTRAINT `students_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`);

--
-- Constraints for table `student_attendances`
--
ALTER TABLE `student_attendances`
  ADD CONSTRAINT `student_attendances_class_id_foreign` FOREIGN KEY (`class_id`) REFERENCES `classes` (`id`),
  ADD CONSTRAINT `student_attendances_student_nis_foreign` FOREIGN KEY (`student_nis`) REFERENCES `students` (`nis`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
