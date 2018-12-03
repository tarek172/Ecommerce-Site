-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 05, 2018 at 07:24 AM
-- Server version: 10.1.36-MariaDB
-- PHP Version: 7.2.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `node`
--

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `pid` int(50) NOT NULL,
  `pname` varchar(50) NOT NULL,
  `price` varchar(50) NOT NULL,
  `quantity` varchar(50) NOT NULL,
  `category` varchar(50) NOT NULL,
  `specification` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`pid`, `pname`, `price`, `quantity`, `category`, `specification`) VALUES
(1, 'nokia c27', '17000', '10', 'phone', 'chaina'),
(6, 'nokia 6', '10000', '10', 'phone', 'new'),
(7, 'huwiae honor 8', '35000', '13', 'cell phone', 'chaina'),
(9, 'pokophone', '28000', '30', 'cell phone', 'budget phone'),
(10, 'mi1', '10000', '100', 'phone', 'black'),
(11, 'note 5', '70000', '10', 'cell phone', 'ai camera'),
(12, 'iphone x', '80000', '40', 'cell phone', 'flagfish'),
(13, 'samsung galaxy 8', '700000', '15', 'phone', 'chaina'),
(14, 'iphone 5', '400000', '7', 'flagfish', 'black'),
(15, 'alcatel 6', '9000', '10', 'phone', 'usa'),
(16, 'samsung A8', '250000', '10', 'phone', 'black'),
(17, 'xaomi node 7', '16000', '30', 'phone', 'japan'),
(18, 'samsung j7', '13000', '20', 'phone', 'india');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `type` varchar(50) NOT NULL,
  `address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `username`, `password`, `type`, `address`) VALUES
(1, 'tarek', 'trk', '1234', 'admin', '12345678'),
(5, 'x', 'trk', '1234', 'block', 'savar'),
(7, 'Hasan', 'hsn', '1234', 'admin', 'uttara'),
(8, '', 'xy', '12', 'user', ''),
(9, 'suzonn', 'xy', '12', 'user', '56780000'),
(10, 'suzonn', 'xy', '12', 'user', '56780000'),
(11, 'imran', 'imrn', '1234', 'admin', 'khilkhet'),
(12, 'jakir', 'jkr', '1234', 'admin', 'banani'),
(13, 'udoy', 'udy', '1234', 'user', 'gulshan'),
(14, 'raihan', 'rhn', '1234', 'admin', 'gazipur'),
(15, 'akash', 'aks', '1234', 'employee', 'dhanmondi-32'),
(16, 'ayon', 'ayn', '1234', 'admin', 'motijhil'),
(18, 'aaaa', 'trk', '12345', '', ''),
(19, 'suzonn', 'trk', '1234', 'admin', 'v');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`pid`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `pid` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
