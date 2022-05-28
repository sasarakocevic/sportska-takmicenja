-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 28, 2022 at 07:33 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sportska-takmicenja`
--

-- --------------------------------------------------------

--
-- Table structure for table `bodovi_tim`
--

CREATE TABLE `bodovi_tim` (
  `id` int(11) NOT NULL,
  `tim_id` int(11) NOT NULL,
  `broj_bodova` int(11) DEFAULT NULL,
  `takmicenje_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `takmicenje`
--

CREATE TABLE `takmicenje` (
  `id` int(11) NOT NULL,
  `naziv` varchar(45) COLLATE utf8_bin NOT NULL,
  `datum_od` date DEFAULT NULL,
  `datum_do` date DEFAULT NULL,
  `mjesto_odrzavanja` varchar(75) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tim`
--

CREATE TABLE `tim` (
  `id` int(11) NOT NULL,
  `naziv` varchar(45) COLLATE utf8_bin NOT NULL,
  `adresa` text COLLATE utf8_bin DEFAULT NULL,
  `slika` text COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `tim_takmicenje`
--

CREATE TABLE `tim_takmicenje` (
  `id` int(11) NOT NULL,
  `tim_id` int(11) NOT NULL,
  `takmicenje_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- --------------------------------------------------------

--
-- Table structure for table `utakmica`
--

CREATE TABLE `utakmica` (
  `id` int(11) NOT NULL,
  `tim1_id` int(11) NOT NULL,
  `tim1_rezultat` int(11) DEFAULT NULL,
  `tim2_id` int(11) NOT NULL,
  `tim2_rezultat` int(11) DEFAULT NULL,
  `takmicenje_id` int(11) NOT NULL,
  `datum` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bodovi_tim`
--
ALTER TABLE `bodovi_tim`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bod_tim_fk` (`tim_id`),
  ADD KEY `bod_takmicenje_fk` (`takmicenje_id`);

--
-- Indexes for table `takmicenje`
--
ALTER TABLE `takmicenje`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tim`
--
ALTER TABLE `tim`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tim_takmicenje`
--
ALTER TABLE `tim_takmicenje`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tim_fk` (`tim_id`),
  ADD KEY `takmicenje_fk` (`takmicenje_id`);

--
-- Indexes for table `utakmica`
--
ALTER TABLE `utakmica`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ut_tim1_fk` (`tim1_id`),
  ADD KEY `ut_tim2_fk` (`tim2_id`),
  ADD KEY `ut_takmicenje_fk` (`takmicenje_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bodovi_tim`
--
ALTER TABLE `bodovi_tim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `takmicenje`
--
ALTER TABLE `takmicenje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tim`
--
ALTER TABLE `tim`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tim_takmicenje`
--
ALTER TABLE `tim_takmicenje`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `utakmica`
--
ALTER TABLE `utakmica`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bodovi_tim`
--
ALTER TABLE `bodovi_tim`
  ADD CONSTRAINT `bod_takmicenje_fk` FOREIGN KEY (`takmicenje_id`) REFERENCES `takmicenje` (`id`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `bod_tim_fk` FOREIGN KEY (`tim_id`) REFERENCES `tim` (`id`) ON UPDATE NO ACTION;

--
-- Constraints for table `tim_takmicenje`
--
ALTER TABLE `tim_takmicenje`
  ADD CONSTRAINT `takmicenje_fk` FOREIGN KEY (`takmicenje_id`) REFERENCES `takmicenje` (`id`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `tim_fk` FOREIGN KEY (`tim_id`) REFERENCES `tim` (`id`) ON UPDATE NO ACTION;

--
-- Constraints for table `utakmica`
--
ALTER TABLE `utakmica`
  ADD CONSTRAINT `ut_takmicenje_fk` FOREIGN KEY (`takmicenje_id`) REFERENCES `takmicenje` (`id`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `ut_tim1_fk` FOREIGN KEY (`tim1_id`) REFERENCES `tim` (`id`) ON UPDATE NO ACTION,
  ADD CONSTRAINT `ut_tim2_fk` FOREIGN KEY (`tim2_id`) REFERENCES `tim` (`id`) ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
