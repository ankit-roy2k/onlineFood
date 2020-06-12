-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 13, 2020 at 01:09 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `onlinefood`
--

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `foodname` varchar(20) NOT NULL,
  `image` varchar(260) NOT NULL,
  `small` int(11) NOT NULL,
  `medium` int(11) NOT NULL,
  `large` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `foodname`, `image`, `small`, `medium`, `large`) VALUES
(1, 'Chilli Chicken', 'https://www.indianhealthyrecipes.com/wp-content/uploads/2018/07/chilli-chicken-recipe-500x500.jpg', 90, 160, 250),
(2, 'Butter Paneer', 'https://farm5.staticflickr.com/4244/34375209303_fe133a2921_o_d.png', 70, 130, 200),
(3, 'Chicken Biryani', 'https://www.awesomecuisine.com/wp-content/uploads/2007/10/Chicken-Biryani_resized.jpg', 80, 150, 220),
(4, 'Brownies', 'https://marijuana-science.com/wp-content/uploads/2020/01/title-image-brownies.jpg', 60, 120, 180),
(5, 'Pizza', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dominos-1586183311.jpg', 99, 199, 349),
(6, 'Burger', 'https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/beef-burger-with-caramelised-onion-jam-d6d4260d.jpg', 149, 200, 289);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(65) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`) VALUES
(3, 'Ankit Roy', 'ankit@brocodedevs.online', '$2y$10$yhOVJe6ZZk4EH2XLXNZZcuEa7FmoId.k.QOJK6IU2gWlhsIrJ5z52');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
