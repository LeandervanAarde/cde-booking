-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Jun 27, 2022 at 09:54 PM
-- Server version: 5.7.34
-- PHP Version: 7.4.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `medInfo`
--

-- --------------------------------------------------------

--
-- Table structure for table `AvailableAppointments`
--

CREATE TABLE `AvailableAppointments` (
  `id` int(3) NOT NULL,
  `DoctorName` varchar(255) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `TimeStart` varchar(255) NOT NULL,
  `TimeEnd` varchar(255) NOT NULL,
  `Speciality` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `AvailableAppointments`
--

INSERT INTO `AvailableAppointments` (`id`, `DoctorName`, `Date`, `TimeStart`, `TimeEnd`, `Speciality`) VALUES
(52, 'Riaan Deale', '20 June 2022', ' 23:00', '23:30 ', 'LEadner'),
(54, 'Elmo  Pretorius', '23 June 2022', ' 01:00', '01:30 ', 'Endicronology'),
(59, 'Elmo  Pretorius', '22 June 2022', ' 10:00', '10:30 ', 'Endicronology'),
(60, 'Ahmid Vachiat', '24 June 2022', ' 01:00', '02:00 ', 'Endicronology'),
(61, 'David Segal', '24 June 2022', ' 10:30', '11:00 ', 'Endicronology'),
(84, 'Gita  Makan', '17 June 2022', ' 10:00', '10:30 ', ''),
(86, 'Ahmid Vachiat', '17 June 2022', '12:30', '13:00', 'Endocrinology'),
(90, 'Elmo  Pretorius', '28 June 2022', ' 10:10', '10:40 ', 'Endocrinology'),
(91, 'Ahmid Vachiat', '28 June 2022', ' 13:30', '14:00 ', 'Endocrinology'),
(93, 'Ahmid Vachiat', '12 June 2022', ' 09:00', '09:30 ', ''),
(96, 'Ryan Reynolds', '17 June 2022', ' 10:30', '11:30 ', 'Endocrinology'),
(97, 'Riaan Deale', '17 June 2022', ' 09:10', '09:30 ', 'Endocrinology'),
(100, 'Ahmid Vachiat', '29 June 2022', ' 09:30', '09:50 ', 'Endocrinology'),
(101, 'Ahmid Vachiat', '29 June 2022', ' 11:00', '11:30 ', 'Endocrinology'),
(102, 'Frederick Schultz', '29 June 2022', ' 15:00', '15:30 ', 'Endocrinology'),
(103, 'Ryan Reynolds', '29 June 2022', ' 13:00', '13:30 ', 'Endocrinology'),
(104, 'Gita Makan', '1 July 2022', ' 13:00', '13:30 ', 'Endocrinology'),
(105, 'Ahmid Vachiat', '01 June 2022', ' 03:00', '03:30 ', 'Endocrinology'),
(106, 'Ahmid Vachiat', '01 July 2022', ' 13:30', '14:00 ', 'Endocrinology'),
(107, 'Gita Makan', '1 July 2022', ' 09:20', '09:40 ', 'Endocrinology'),
(108, 'Elmo Pretorius', '01 July 2022', ' 10:30', '11:00 ', 'Endocrinology'),
(109, 'Ryan Reynolds', '01 July 2022', ' 10:30', '11:00 ', 'Endocrinology'),
(110, 'Elmo Pretorius', '17 June 2022', ' 16:00', '17:00 ', 'Endocrinology'),
(112, 'Ryan Reynolds', '18 June 2022', ' 12:00', '12:30 ', 'Endocrinology');

-- --------------------------------------------------------

--
-- Table structure for table `BookedApp`
--

CREATE TABLE `BookedApp` (
  `id` int(11) NOT NULL,
  `TimeStart` varchar(255) NOT NULL,
  `TimeEnd` varchar(255) NOT NULL,
  `PatientName` varchar(255) NOT NULL,
  `DoctorName` varchar(255) NOT NULL,
  `DoctorImage` int(255) NOT NULL,
  `PatienNumber` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `BookedAppointments`
--

CREATE TABLE `BookedAppointments` (
  `id` int(11) NOT NULL,
  `Patient` varchar(255) NOT NULL,
  `Doctor` varchar(255) NOT NULL,
  `timeStart` varchar(255) NOT NULL,
  `timeEnd` varchar(255) NOT NULL,
  `appointType` varchar(255) NOT NULL,
  `patientEmail` varchar(255) NOT NULL,
  `patientCell` varchar(255) NOT NULL,
  `Date` varchar(255) NOT NULL,
  `DoctorImage` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `BookedAppointments`
--

INSERT INTO `BookedAppointments` (`id`, `Patient`, `Doctor`, `timeStart`, `timeEnd`, `appointType`, `patientEmail`, `patientCell`, `Date`, `DoctorImage`) VALUES
(1, 'Dylan Pretorius', 'D. Segal', '11:00', '12:00', 'Endocrinology', 'DyliP@yahoo.com', '083 571 9999', '24 June 2022', 'DaveSegal.jpeg'),
(2, 'Melissa MayWeather', 'G. Makan', '09:00', '09:30', 'Endocrinology', 'Mayweathermelissi@gmail.com', '0602507568', '25 June 2022', 'GitaMakan.png'),
(4, 'Melissa MayWeather', 'G. Makan', '09:00', '09:30', 'Endocrinology', 'Mayweathermelissi@gmail.com', '0602507568', '24 June 2022', 'GitaMakan.png'),
(5, 'Liam Campleman', 'R. Reynolds', '08:00', '09:00', 'Endocrinology', 'LiamC@icloud.com', '082 345 6789', '24 June 2022', 'RyanReynolds.jpg'),
(6, 'Reinhardt De Beer', 'G. Makan', '10:00', '10:30', 'Endocrinology', 'joueier@gmail.com', '084 555 1212', '25 June 2022', 'GitaMakan.png'),
(7, 'Leander van Aarde', 'G. Makan', '12:00', '12:30', 'Endocrinology', '200211@virtualwindow.co.za', '086 764 8975', '10 June 2022', 'GitaMakan.png'),
(69, ' Nina van Aarde', 'Ryan  Reynolds', '  12:12', ' 12:43 ', ' rdtf', ' NinavanAarde@outlook.com', '082 256 2508', '26 June 2022 ', 'RyanReynolds.jpg'),
(127, 'Nina van Aarde', 'Ahmid Vachiat', ' 09:10', '09:40 ', 'Penis Doctor', 'NinavanAarde@outlook.com', '082 256 2508', '26 June 2022 ', ''),
(131, 'Riaan van Aarde', 'Riaan Deale', '14:00', '14:30', 'Endocrinology', 'Riaan.vaonline@gmail.com', '0823330011', '27 June 2022 ', 'RiaanDeale.jpg'),
(142, 'Polly Gray', 'Ahmid Vachiat', ' 09:10', '09:20 ', 'Endocrinology', 'Polly@gmail.com', '0767468465', '27 June 2022 ', 'AhmidVachiat.jpg'),
(146, 'Leo Kuyper', '', '', '', '', 'LeoKuyp@gmail.com', '0823339877', ' ', ''),
(148, 'Leo Kuyper', 'Karlien De Jonge ', ' 10:30', '11:00 ', 'Endocrinology', 'LeoKuyp@gmail.com', '0823339877', '28 June 2022 ', '');

-- --------------------------------------------------------

--
-- Table structure for table `Doctors`
--

CREATE TABLE `Doctors` (
  `id` int(11) NOT NULL,
  `profileImage` text,
  `name` text NOT NULL,
  `surname` varchar(255) NOT NULL,
  `dateOfBirth` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(27) NOT NULL,
  `specialisation` varchar(255) NOT NULL,
  `room` varchar(30) NOT NULL,
  `consultFee` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Doctors`
--

INSERT INTO `Doctors` (`id`, `profileImage`, `name`, `surname`, `dateOfBirth`, `gender`, `phoneNumber`, `email`, `password`, `specialisation`, `room`, `consultFee`) VALUES
(1, 'GitaMakan.png', 'Gita', 'Makan', '25 May 1982', 'Female', '0835983356', 'GitaM@CDE.com', 'GitaMak@n@CDE', 'Endocrinology', 'F3', 600),
(4, 'ElmoPretorius.jpg', 'Elmo', 'Pretorius', '10 January 1982', 'Male', '0824447865', 'ElmoP@CDE.com', '31m0Dr.3nd0', 'Endocrinology', 'D10', 1200),
(5, 'RyanReynolds.jpg', 'Ryan', 'Reynolds', '20 December 1969', 'Male', '0826678891', 'Ryan@CDE.com', 'Ry@n15@n@ct0r', 'Endocrinology', 'D7', 1200),
(6, 'AhmidVachiat.jpg', 'Ahmid', 'Vachiat', '12 September 1987', 'Female', '06345995586', 'Ahmid@CDE.com', 'th15c@nb3s3cUr3', 'Endocrinology', 'D2', 1300),
(7, 'KarlienDeJonge.jpg', 'Karlien', 'De Jonge ', '19 July 1975', 'Female', '0866654347', 'KarlienD@CDE.com', '@rLKI3n2@0999', 'Endocrinology', 'P7', 490),
(8, 'FrederickSchultz.jpg', 'Frederick', 'Schultz', '01 September 1957', 'Male', '0627766634', 'FrederickS@CDE.com', 'Password123', 'Endocrinology', 'D10', 650),
(9, 'RiaanDeale.jpg', 'Riaan', 'Deale', '22 October 1971', 'Male', '0616034456', 'RiaanD@CDe.com', 'Riaanpasswordsf0rw0rk', 'Endocrinology', 'F5', 840);

-- --------------------------------------------------------

--
-- Table structure for table `Patients`
--

CREATE TABLE `Patients` (
  `id` int(4) NOT NULL,
  `profileImage` text,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `dateOfBirth` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phoneNumber` varchar(14) NOT NULL,
  `email` varchar(255) NOT NULL,
  `medicalAidNr` varchar(255) NOT NULL,
  `prevAppoint` varchar(255) NOT NULL,
  `medCondition` varchar(255) NOT NULL,
  `prevAppointmentDr` varchar(255) NOT NULL,
  `prevHba1c` int(4) NOT NULL,
  `feesOut` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Patients`
--

INSERT INTO `Patients` (`id`, `profileImage`, `name`, `surname`, `dateOfBirth`, `gender`, `phoneNumber`, `email`, `medicalAidNr`, `prevAppoint`, `medCondition`, `prevAppointmentDr`, `prevHba1c`, `feesOut`) VALUES
(2, 'Leander.jpeg', 'Leander Etienne', 'van Aarde', '26 March 2001', 'Male', '0826459911', 'Leander.vaonline@gmail.com', '156409785911', '02 April 2022', 'Type 1 Diabetes', 'Dr. Gita Makan', 8, 1200),
(3, 'Leander.jpeg', 'Nina', 'van Aard', '14 December 1998', 'Female', '082 256 2508', 'NinavanAarde@outlook.com', '89765433456', '08 December 2021', 'Type 1 Diabetes', 'Dr. Gary Chiba ', 6, 1000),
(17, NULL, 'Leo', 'Kuyper', '21 December 1997', 'Male', '0823339877', 'LeoKuyp@gmail.com', '153743823725', '21 July 2020]', 'Developers Disease', 'Dr D Segal', 8, 1000),
(23, NULL, 'Polly', 'Gray', '27 June 2011', 'Female', '0767468465', 'Polly@gmail.com', '987656568', 'None', 'Diabetes ', ' ', 0, 0),
(24, NULL, 'Polly', 'Grey', '27 June 2011', 'Male', '0767468465', 'Poly@gmail.com', '987656568', 'None', 'Diabetes ', ' ', 0, 0),
(33, NULL, 'Riaan', 'van Aarde', '23 January 1971', 'Male', '0823330011', 'Riaan.vaonline@gmail.com', '123456754', 'None', 'Epilepsy ', ' ', 0, 0),
(35, NULL, 'Mike', 'Maynard', '20 June 1987', 'Male', '08234544645', 'Mike@openwindow.co.za', '89765456', 'None', 'Type 1 Diabetes ', ' ', 0, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Receptionists`
--

CREATE TABLE `Receptionists` (
  `id` int(4) NOT NULL,
  `ProfileImage` text,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  `dateOfBirth` varchar(255) NOT NULL,
  `gender` varchar(255) NOT NULL,
  `phoneNumber` varchar(14) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(27) NOT NULL,
  `rank` varchar(40) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `monthInc` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Receptionists`
--

INSERT INTO `Receptionists` (`id`, `ProfileImage`, `name`, `surname`, `dateOfBirth`, `gender`, `phoneNumber`, `email`, `password`, `rank`, `Status`, `monthInc`) VALUES
(1, 'PamBeesly.jpeg', 'Pam', 'Beesly', '09 April 1995', 'Female', '082 567 9023', 'Pam@CDE.com', '1l0v3y0uJ1m', 'Receptionist', 'Non-activee', 'R24 050'),
(2, 'JordanBelfort.jpeg', 'Jordan', 'Belfort', '9 July 1962', 'Male', '082 235 9364', 'Jordan@CDE.com', '1B111i0nd011@r5', 'Receptionist', 'Active', 'R 15 000'),
(3, 'AmandaMokemane.jpg', 'Amanda', 'Mokemane', '9 April 1982', 'Female', '0824447720', 'Amanda@CDE.com', '@m@nd@w0rk5pWs0', 'Receptionist', 'Active', 'R 24 050'),
(5, 'MikeWazowski.jpeg', 'Mike', 'Wasowski', '12 January 1992', 'Male', '0821112222', 'Mike.recep@CDE.com', 'M1keMonster', 'Head Receptionist', 'Active', 'R 28000');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `AvailableAppointments`
--
ALTER TABLE `AvailableAppointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `BookedApp`
--
ALTER TABLE `BookedApp`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `BookedAppointments`
--
ALTER TABLE `BookedAppointments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Doctors`
--
ALTER TABLE `Doctors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Patients`
--
ALTER TABLE `Patients`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Receptionists`
--
ALTER TABLE `Receptionists`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `AvailableAppointments`
--
ALTER TABLE `AvailableAppointments`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=116;

--
-- AUTO_INCREMENT for table `BookedApp`
--
ALTER TABLE `BookedApp`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `BookedAppointments`
--
ALTER TABLE `BookedAppointments`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=149;

--
-- AUTO_INCREMENT for table `Doctors`
--
ALTER TABLE `Doctors`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `Patients`
--
ALTER TABLE `Patients`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `Receptionists`
--
ALTER TABLE `Receptionists`
  MODIFY `id` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
