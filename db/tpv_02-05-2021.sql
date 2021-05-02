-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-05-2021 a las 23:18:53
-- Versión del servidor: 10.4.17-MariaDB
-- Versión de PHP: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tpv`
--
CREATE DATABASE IF NOT EXISTS `tpv` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `tpv`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `active` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `CategoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categories`
--

INSERT INTO `categories` (`id`, `uuid`, `name`, `image`, `active`, `createdAt`, `updatedAt`, `CategoryId`) VALUES
(1, '8ea92f26-7199-4b4e-aa51-79b8610e853b', 'Drinks', NULL, 1, '2021-04-11 20:30:49', '2021-04-11 20:30:49', NULL),
(2, '5647f814-649c-4175-a285-ea015de570d6', 'Meals', NULL, 1, '2021-04-11 20:31:00', '2021-04-11 20:31:00', NULL),
(3, '7fecde13-adf0-44ec-9197-d66774f98645', 'Alcoholic Drinks', NULL, 1, '2021-04-11 20:31:20', '2021-04-11 20:31:20', 1),
(4, '60eabef1-fc7f-4d70-9d00-f7216c32462a', 'Sodas', NULL, 1, '2021-04-11 20:31:31', '2021-04-11 20:31:31', 1),
(5, '58cba71d-fc45-4d41-b376-3ba9c3179333', 'Wines', NULL, 1, '2021-04-11 20:31:37', '2021-04-11 20:31:37', 3),
(35, 'cd0a4698-a4d6-439b-b225-296260804f2b', 'Category 0', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(36, 'b61a185b-4b22-4cec-86d7-2620d3039528', 'Category 1', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(37, 'ab139011-990b-4961-899f-891bfb899c7f', 'Category 2', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(38, 'cd4bc865-24e8-4ca4-afcd-3697eac1a7d1', 'Category 3', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(39, 'd23fffd0-2a5b-40ce-a87e-7d306e3e7dd5', 'Category 4', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(40, '18479cf0-af45-4bc4-b9ee-b872ff6c3f24', 'Category 5', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(41, '7667fe58-309b-4014-9945-b45d9a85a8e7', 'Category 6', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(42, '1d2463cb-58f6-4959-a130-ed611062d8b5', 'Category 7', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(43, '212a5ada-9471-4deb-96ac-7f86c3b2f599', 'Category 8', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(44, 'bdd67b0a-19a2-4dda-bbe6-76c171f8d9fb', 'Category 9', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(45, '50873483-1850-4f7f-b8d2-cd06a6376b43', 'Category 10', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(46, '735a394d-1e30-4a9b-9429-e3d9aad09c83', 'Category 11', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(47, '7f19289a-1cb1-46a7-9b78-317f60936d52', 'Category 12', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(48, 'af88fb07-2071-44af-ab2e-e37744409faa', 'Category 13', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(49, 'b6110b2d-8443-4cf3-bbb9-72f5241405bf', 'Category 14', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(50, '874076a7-379c-4e2d-a061-dd54df751b20', 'Category 15', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(51, 'f881ab62-e728-4653-85ac-a65b00305e93', 'Category 16', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(52, 'fdddd4b6-18fb-47b5-bd3a-d3c3c8b7f0b9', 'Category 17', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(53, '6bbab61b-7208-4b74-aa30-f5256aca6dcc', 'Category 18', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(54, '842b05bb-ce3b-4fdf-9f0e-3bf675e2d339', 'Category 19', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(55, 'fefa7baf-fdf5-4cf0-899b-fb34df2b9345', 'Category 20', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(56, '471f80ff-d937-4cc9-91e2-0ccc3e980399', 'Category 21', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(57, '0222981c-6057-4b4b-bf1e-857a6f590e02', 'Category 22', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(58, '34214272-df51-416a-8cd2-2908945a0573', 'Category 23', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(59, '727f2f32-a692-4144-b76f-8d7d5a88e80e', 'Category 24', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(60, 'f634b889-6bcf-435e-a2d2-460863b663e8', 'Category 25', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(61, '647fb8a3-fc68-4cd8-880f-b6fb393b0196', 'Category 26', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(62, 'ddcf26c8-061f-42cc-971f-4c8525422757', 'Category 27', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL),
(63, '2b520ccd-2596-4d86-8901-0f074dde17f9', 'Category 28', NULL, 1, '2021-04-25 16:18:02', '2021-04-25 16:18:02', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `invoices`
--

CREATE TABLE `invoices` (
  `id` int(11) NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `status` enum('unpaid','paid') DEFAULT 'unpaid',
  `active` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `tableId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `invoices`
--

INSERT INTO `invoices` (`id`, `uuid`, `status`, `active`, `createdAt`, `updatedAt`, `tableId`) VALUES
(1, '0a5e9606-8997-4afc-ac6b-f6cf7d705709', 'unpaid', 1, '2021-03-23 20:17:40', '2021-03-23 20:17:40', 34);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `lines`
--

CREATE TABLE `lines` (
  `id` int(11) NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `product` varchar(255) NOT NULL,
  `cost` double NOT NULL,
  `discount` double NOT NULL DEFAULT 0,
  `active` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `invoiceId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `lines`
--

INSERT INTO `lines` (`id`, `uuid`, `quantity`, `product`, `cost`, `discount`, `active`, `createdAt`, `updatedAt`, `invoiceId`) VALUES
(2, '7d4ef43f-a98c-46f8-aab5-0f6e9931b8c6', 2, 'Coke', 2.75, 0, 1, '2021-03-23 20:17:44', '2021-03-23 20:17:44', 1),
(3, 'e3baf905-d82f-4075-a2a8-f066e5c222f4', 2, 'Product 1', 5, 0, 1, '2021-05-01 23:56:02', '2021-05-02 17:37:11', 1),
(4, '4d09275c-fde2-4fdf-be72-0e6214e1bad2', 1, 'Product 1', 5, 0, 1, '2021-05-01 23:56:11', '2021-05-01 23:56:11', 1),
(5, 'ba1cfb0a-bd73-4527-ae4e-9b9a485a5d3c', 14, 'Product 2', 6, 0, 1, '2021-05-02 17:29:46', '2021-05-02 17:46:07', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `active` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `categoryId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `uuid`, `name`, `image`, `price`, `active`, `createdAt`, `updatedAt`, `categoryId`) VALUES
(1, NULL, 'Product 1', NULL, 5, 1, '2021-04-25 12:52:53', '2021-04-25 12:52:53', 2),
(2, NULL, 'Product 2', NULL, 6, 1, '2021-04-25 12:52:53', '2021-04-25 12:52:53', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tables`
--

CREATE TABLE `tables` (
  `id` int(11) NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `name` varchar(255) NOT NULL,
  `status` enum('free','reserved','occupied') DEFAULT 'free',
  `active` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tables`
--

INSERT INTO `tables` (`id`, `uuid`, `name`, `status`, `active`, `createdAt`, `updatedAt`) VALUES
(1, 'e33960ea-4276-479c-8bd2-b015160f18be', 'Table 1', 'free', 0, '2021-03-23 20:17:31', '2021-04-10 23:56:28'),
(2, '2660e8d7-9e9a-4ba2-bd73-a2330f082929', 'Table 1', 'free', 0, '2021-04-05 20:17:15', '2021-04-10 23:47:41'),
(3, 'bfa3a4d0-1b02-4eb0-a059-74a7d44c8079', 'Mesa 1', 'occupied', 0, '2021-04-05 20:22:37', '2021-04-10 23:21:09'),
(4, '1ccc2b3a-4ceb-4635-961a-1f6f468b1f26', 'Mesa 11', 'free', 0, '2021-04-05 20:23:48', '2021-04-10 23:56:32'),
(5, '407a876e-45b4-46ce-86a9-71f72b7f133b', 'Mesa 2', 'free', 0, '2021-04-05 20:23:57', '2021-04-10 23:56:33'),
(6, '14df8d14-5491-4c4e-9f6b-5b3c1dc5b4c7', 'Mesa 21', 'free', 0, '2021-04-05 20:24:45', '2021-04-10 23:56:35'),
(7, 'c2958781-9f9e-4791-ae56-762bf6097e16', 'Mesa nueva 1', 'free', 0, '2021-04-10 21:34:13', '2021-04-10 23:34:27'),
(8, 'ca737cc4-10e3-492f-a5d1-4e825eec5449', 'Mesa 1111', 'free', 0, '2021-04-10 23:11:03', '2021-04-10 23:34:31'),
(34, '3f404c1e-2436-4013-97df-640814491933', 'Table 1', 'free', 1, '2021-04-10 23:59:22', '2021-04-18 20:54:46'),
(35, 'dad4c81c-5299-47c2-a6f9-e6f18da1c822', 'Table 2', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(36, '19d9eff1-3e18-4258-87cb-67726b4dc5d6', 'Table 3', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(37, 'cb5f027f-d6a6-4b71-ad8b-15ab1f4f7b21', 'Table 4', 'free', 1, '2021-04-10 23:59:22', '2021-04-11 20:26:27'),
(38, 'c89e32bc-6808-4f3e-b7ec-4213f4b29b71', 'Table 5', 'free', 1, '2021-04-10 23:59:22', '2021-04-11 00:34:40'),
(39, '83927973-9533-4f15-8796-0700b91fe1a9', 'Table 6', 'free', 1, '2021-04-10 23:59:22', '2021-04-11 20:05:26'),
(40, '44c4c631-fd1a-4fc0-8848-537d21c091cd', 'Table 7', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(41, '5f6bd977-278e-49c0-866f-06580a4e3400', 'Table 8', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(42, '2e1df8d5-4986-40eb-8385-218b4bed7bd9', 'Table 9', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(43, '63150186-e323-42db-888e-aab88e133d08', 'Table 10', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(44, '3b93d28f-c90c-44e7-8c54-7cb627026d55', 'Table 11', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(45, '6136b582-ff00-4eef-a3e1-c8cb7f550f1d', 'Table 12', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(46, 'e2b145b7-0866-4525-8ba1-4dbc1d310427', 'Table 13', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(47, '30690117-360f-4c58-be88-ca7f397a04a5', 'Table 14', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(48, 'dd58a7ef-ac7f-438e-aa06-3a11f5af45fc', 'Table 15', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(49, '03378b31-7e3b-4957-b6eb-24ee59cc6511', 'Table 16', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(50, '977fcf80-6e49-41ab-bf6c-94cb0434ecc0', 'Table 17', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(51, 'ecf8d50d-7374-4a9e-bbde-e74a838c8916', 'Table 18', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(52, '84be5a53-0ce8-482c-8a80-8ad0af6f876c', 'Table 19', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(53, '5f7e89a1-6c8e-4ab2-8be8-1ebf148dd540', 'Table 20', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(54, '39cc9aed-26d7-457d-9b59-9d17db0b78a8', 'Table 21', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(55, 'fedd6b81-963c-4d63-8866-2f9294e3b858', 'Table 22', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(56, '168d97e9-b50d-4d36-8002-79f0f3f9a187', 'Table 23', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(57, '3b39a9c2-6157-4d2b-99d2-fa226a093492', 'Table 24', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(58, 'b0e25f2c-b518-4b6b-b356-4e2c5ee55160', 'Table 25', 'free', 1, '2021-04-10 23:59:22', '2021-04-10 23:59:22'),
(59, 'bf5b6c60-c39d-4db8-b153-7dab284f2ca8', 'Table 26', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(60, 'a08007a6-638f-44d0-8735-1029a7e97323', 'Table 27', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(61, '99ab75c7-f0a4-4238-bbfb-0da57c68cf55', 'Table 28', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(62, 'bd4e44bd-7459-4439-a5d4-43a2aa284f03', 'Table 29', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(63, '194fc50b-7e5a-4193-92f4-24363542e414', 'Table 30', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(64, '6e5e1a2e-1604-4708-9966-6c3951f976dc', 'Table 31', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(65, '03c0f697-83a1-4f5e-b5f4-e9358ad93b1e', 'Table 32', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(66, '26815ea7-cea7-482c-8259-1ad71b8652c1', 'Table 33', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(67, '06edec99-dfa6-42f1-b380-57ee856490a7', 'Table 34', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(68, '18aba65a-c52d-4043-9088-b6829fd9fcc2', 'Table 35', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(69, '68a35934-00b8-43cb-b620-90e8d13d332d', 'Table 36', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(70, 'df22f597-1a7e-4152-80b7-3eee424fab25', 'Table 37', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(71, 'f26c2f0b-1346-42b3-bfe3-8d979ea93d86', 'Table 38', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(72, '624da8d1-1a36-40eb-b096-660b639f6eb6', 'Table 39', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(73, 'b33216ac-3f13-4385-b523-8665e631f215', 'Table 40', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(74, '427f45df-c8e9-4a0d-b795-e4825091f867', 'Table 41', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(75, 'a994bb79-bc0c-43e2-a707-1878fb051cd4', 'Table 42', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(76, 'c0163982-1060-4378-bfd1-3e081783c731', 'Table 43', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(77, 'deeb7b3a-e655-4a6d-adbd-5380924b8a8e', 'Table 44', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(78, '4c869942-c986-4592-8c0d-114fb9b0e504', 'Table 45', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(79, '31d96835-098a-4027-97e9-9829f9dce575', 'Table 46', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(80, 'b31a3b01-f1ca-4f14-893c-a673d70449bc', 'Table 47', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(81, '47c8955f-e749-4e76-b62e-a6454c084ca8', 'Table 48', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(82, 'c39ed5fa-e188-4bdc-811c-7f99ee3a2a7d', 'Table 49', 'free', 1, '2021-04-10 23:59:44', '2021-04-10 23:59:44'),
(83, '2cfffdc1-cc0c-4212-b0b6-d365d4d7aa0a', 'Table 50', 'free', 0, '2021-04-10 23:59:44', '2021-04-11 20:03:31'),
(84, 'd67fda8e-a366-40d9-bb8b-63ad0e1edfe0', 'Table 511', 'free', 0, '2021-04-11 01:00:27', '2021-04-11 01:06:43');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `uuid` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL DEFAULT 'user',
  `active` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `CategoryId` (`CategoryId`);

--
-- Indices de la tabla `invoices`
--
ALTER TABLE `invoices`
  ADD PRIMARY KEY (`id`),
  ADD KEY `tableId` (`tableId`);

--
-- Indices de la tabla `lines`
--
ALTER TABLE `lines`
  ADD PRIMARY KEY (`id`),
  ADD KEY `invoiceId` (`invoiceId`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `categoryId` (`categoryId`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `tables`
--
ALTER TABLE `tables`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `invoices`
--
ALTER TABLE `invoices`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `lines`
--
ALTER TABLE `lines`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tables`
--
ALTER TABLE `tables`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`CategoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `invoices`
--
ALTER TABLE `invoices`
  ADD CONSTRAINT `invoices_ibfk_1` FOREIGN KEY (`tableId`) REFERENCES `tables` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `lines`
--
ALTER TABLE `lines`
  ADD CONSTRAINT `lines_ibfk_1` FOREIGN KEY (`invoiceId`) REFERENCES `invoices` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`categoryId`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
