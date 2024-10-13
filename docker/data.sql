-- -----------------------------------------------------
-- Schema full-stack-sports-center
-- -----------------------------------------------------
CREATE DATABASE IF NOT EXISTS `sports-center`;

USE `sports-center` ;

-- Drop existing tables if they exist
DROP TABLE IF EXISTS Brand;
DROP TABLE IF EXISTS Type;
DROP TABLE IF EXISTS Product;

-- Create the Brand table
CREATE TABLE `Brand` (
                         `Id` INT AUTO_INCREMENT PRIMARY KEY,
                         `Name` VARCHAR(255) NOT NULL
);

-- Insert data into the Brand table
INSERT INTO Brand (Name) VALUES
                             ('Adidas'),
                             ('ASICS'),
                             ('Victor'),
                             ('Yonex'),
                             ('Puma'),
                             ('Nike'),
                             ('Babolat');

-- Create the Type table
CREATE TABLE `Type` (
                        `Id` INT AUTO_INCREMENT PRIMARY KEY,
                        `Name` VARCHAR(255) NOT NULL
);

-- Insert data into the Type table
INSERT INTO Type (Name) VALUES
                            ('Shoes'),
                            ('Bats'),
                            ('Ball'),
                            ('Kit Bags');

-- Create the Product table
CREATE TABLE `Product` (
                           `Id` INT AUTO_INCREMENT PRIMARY KEY,
                           `Name` VARCHAR(255) NOT NULL,
                           `Description` TEXT,
                           `Price` DECIMAL(10, 2) NOT NULL,
                           `PictureUrl` VARCHAR(255),
                           `ProductTypeId` INT NOT NULL,
                           `ProductBrandId` INT NOT NULL,
                           FOREIGN KEY (`ProductTypeId`) REFERENCES `Type`(`Id`),
                           FOREIGN KEY (`ProductBrandId`) REFERENCES `Brand`(`Id`)
);

-- Insert data into the Product table
INSERT INTO Product (Name, Description, Price, PictureUrl, ProductTypeId, ProductBrandId) VALUES
                                                                                              ('CRICK-1000 Cricket Shoes For Men', 'Designed for professional as well as amateur badminton players. These indoor shoes are crafted with synthetic upper that provides natural fit, while the EVA midsole provides lightweight cushioning. The shoes can be used for Badminton and Squash', 3500, 'https://m.media-amazon.com/images/I/718s9bt3PPL._SX522_.jpg', 1, 1),
                                                                                              ('Professional and Durable Dual Closer Cricket Shoe For Men Cricket Shoes For Men', 'Designed for professional as well as amateur badminton players. These indoor shoes are crafted with synthetic upper that provides natural fit, while the EVA midsole provides lightweight cushioning. The shoes can be used for Badminton and Squash', 3375, 'https://m.media-amazon.com/images/I/412T-Ehy2AL._SY675_.jpg', 1, 1),
                                                                                              ('Adidas India Limited Edition Shoe Men', 'Designed for professional as well as amateur badminton players. These indoor shoes are crafted with synthetic upper that provides natural fit, while the EVA midsole provides lightweight cushioning. The shoes can be used for Badminton and Squash', 3375, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/52ab1ad54a9d4e21874b49d6ff89653f_9366/INDIA_LIMITED_EDITION_SHOE_MEN_White_IV2140_01_standard.jpg', 1, 1),
                                                                                              ('Adidas Cri Hase Shoes', 'The Asics Gel Rocket 8 Indoor Court Shoes (Orange/Silver) will keep you motivated and fired up to perform at your peak in volleyball, squash and other indoor sports. Beginner and intermediate players get cutting-edge technologies at an affordable price point. This entry level all-rounder has a durable upper and offers plenty of stability.', 4249, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/ea5bede957034779a35dae080164a89f_9366/CRI_HASE_SHOES_White_EX3685_01_standard.jpg', 1, 2),
                                                                                              ('Adidas Howzat Spike 20 Shoes', 'The Asics Gel Rocket 8 Indoor Court Shoes (Orange/Silver) will keep you motivated and fired up to perform at your peak in volleyball, squash and other indoor sports. Beginner and intermediate players get cutting-edge technologies at an affordable price point. This entry level all-rounder has a durable upper and offers plenty of stability.', 3499, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/16345f189dd24b869a52673f770ef54e_9366/Howzat_Spike_20_Shoes_White_IG6753_01_standard.jpg', 1, 2),
                                                                                              ('Adidas CriNU 23 M', 'The Asics Gel Rocket 8 Indoor Court Shoes (Orange/Silver) will keep you motivated and fired up to perform at your peak in volleyball, squash and other indoor sports. Beginner and intermediate players get cutting-edge technologies at an affordable price point. This entry level all-rounder has a durable upper and offers plenty of stability.', 3499, 'https://m.media-amazon.com/images/I/51r1nRLj7EL._SY675_.jpg', 1, 2),
                                                                                              ('Adidas Howzat Spike Junior 20 Shoes', 'PU Leather, Mesh, EVA, ENERGY MAX, Nylon sheet, Rubber', 2392, 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/98186458891a4227b5d890d9dd2b9883_9366/Howzat_Spike_Junior_20_Shoes_White_IG6754_01_standard.jpg', 1, 3),
                                                                                              ('PUMA 24 FH Rubber Unisex Cricket Shoes', 'PU Leather, Mesh, EVA, ENERGY MAX, Nylon sheet, Rubber', 3000, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107699/02/fnd/IND/fmt/png/PUMA-24-FH-Rubber-Unisex-Cricket-Shoes', 1, 3),
                                                                                              ('PUMA EvoSpeed V2 Cricket Youth Shoes', 'Rule the game with Super Ace Light highlights Maximum shock absorption Quick compression recovery Its high resilience ensures YONEX insoles retain their shape longer Meticulously contoured for comfort Provides stability in the forefoot and toe areas technology.', 2590, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107354/06/fnd/IND/fmt/png/EvoSpeed-V2-Cricket-Youth-Shoes', 1, 4),
                                                                                              ('PUMA Cricket Classic Cat Mens Shoes', 'Rule the game with Super Ace Light highlights Maximum shock absorption Quick compression recovery Its high resilience ensures YONEX insoles retain their shape longer Meticulously contoured for comfort Provides stability in the forefoot and toe areas technology.', 3500, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/107807/05/fnd/IND/fmt/png/Cricket-Classic-Cat-Men''s-Shoes', 1, 4),
                                                                                              ('PUMA Spike 24.1 Unisex Cricket Shoes', 'Rule the game with Super Ace Light highlights Maximum shock absorption Quick compression recovery Its high resilience ensures YONEX insoles retain their shape longer Meticulously contoured for comfort Provides stability in the forefoot and toe areas technology.', 3700, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107696/02/sv01/fnd/IND/fmt/png/PUMA-Spike-24.1-Unisex-Cricket-Shoes', 1, 4),
                                                                                              ('PUMA Cricket Square Mens Shoes', 'With features and functions designed to withstand long hours out on the pitch, these one8 19 FH Rubber shoes have been engineered to offer comfort to cricketers', 4999, 'https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/107353/02/sv01/fnd/IND/fmt/png/Cricket-Square-Men''s-Shoes', 1, 5),
                                                                                              ('Reebok Men Cricket Re-volve Tech Shoes', 'With features and functions designed to withstand long hours out on the pitch, these one8 19 FH Rubber shoes have been engineered to offer comfort to cricketers.', 5200, 'https://m.media-amazon.com/images/I/51HSgW30CCL._SY695_.jpg', 1, 5),
                                                                                              ('Reebok Men Cricket BRILLIANCE Shoes', 'With features and functions designed to withstand long hours out on the pitch, these one8 19 FH Rubber shoes have been engineered to offer comfort to cricketers.', 5700, 'https://m.media-amazon.com/images/I/51huA211WhL._SY695_.jpg', 1, 5),
                                                                                              ('Reebok Men All Round Kaiser Cricket Shoes', 'Babolat Shadow Spirit Mens Badminton Shoes (Cloisonne/Strike)', 4125, 'https://m.media-amazon.com/images/I/51mH1DKNPkL._SY695_.jpg', 1, 7),
                                                                                              ('Reebok Mens Power Play Cricket Shoes', 'Babolat Shadow Tour Mens Badminton Shoes (White/Blue)', 5249, 'https://m.media-amazon.com/images/I/51KPQzEsdwL._SY695_.jpg', 1, 7),
                                                                                              ('Reebok Men Cricket Re-volve Tech Shoes', 'Babolat Shadow Team Womens Badminton Shoes (Black/Peony)', 2999, 'https://img.tatacliq.com/images/i16//437Wx649H/MP000000021491695_437Wx649H_202403082051232.jpeg', 1, 7),
                                                                                              ('SS Master Kashmir Willow Cricket Bat', 'For offensive players looking to win with game-changing spin and power.', 6099, 'https://www.sstoncricket.com/wp-content/uploads/2023/04/kw_master_-_4_4.png', 2, 4),
                                                                                              ('Shockwave 2.4 Players Adult Cricket Bat', 'For offensive players looking to win with game-changing spin and power.', 6399, 'https://www.gray-nicolls.co.uk/cdn/shop/files/Shockwave2.4PlayersFace.jpg?v=1710930096&width=1800', 2, 4),
                                                                                              ('Spartan Sikender 1000 CB 181', 'For offensive players looking to win with game-changing spin and power.', 13299, 'https://spartansports.com/cdn/shop/files/SIKANDER1000CB181_8faf6774-60e2-4ea5-a91d-61f295666947.png?v=1723202711&width=823', 2, 4),
                                                                                              ('Spartan CG Hammer 166', 'Babolat Boost D Tennis Racquet (260gm, Strung)', 6999, 'https://spartansports.com/cdn/shop/files/CGHAMMER_8ec13491-5329-458f-822b-52c56e38feae.png?v=1723204082&width=823', 2, 7),
                                                                                              ('SG RSD Spark Kashmir Willow Cricket Bat', 'Babolat Pure Aero 2019 Superlite Tennis Racquet (Unstrung, 255gm)', 13000, 'https://m.media-amazon.com/images/I/31j3PPIs7ML._SX300_SY300_QL70_FMwebp_.jpg', 2, 7),
                                                                                              ('SG Thunder Plus Kashmir Willow Cricket Bat', 'Babolat Pure Drive VS Tennis Racquet (Pair, 300gm, Strung)', 34000, 'https://m.media-amazon.com/images/I/21lCYR4IoyL._SX300_SY300_QL70_FMwebp_.jpg', 2, 7),
                                                                                              ('SG Test LE Red Cricket Leather Ball', 'Featuring an innovative surface panel design, this is the match ball used during football''s FIFA World Cup™. Inspired by Russia''s urban landscapes, a pixelated graphic pays tribute to the iconic Telstar ball. Its thermally bonded seamless surface designs.', 2499, 'https://m.media-amazon.com/images/I/419YNJIeFXL._SY300_SX300_QL70_FMwebp_.jpg', 3, 1),
                                                                                              ('SG Test LE White Cricket Leather Ball', 'Featuring an innovative surface panel design, this is the match ball used during football''s FIFA World Cup™. Inspired by Russia''s urban landscapes, a pixelated graphic pays tribute to the iconic Telstar ball. Its thermally bonded seamless surface designs.', 3200, 'https://m.media-amazon.com/images/I/41anOmODuCL._SX300_SY300_QL70_FMwebp_.jpg', 3, 1),
                                                                                              ('Kookaburra Regulation Cricket Ball', 'Featuring an innovative surface panel design, this is the match ball used during football''s FIFA World Cup™. Inspired by Russia''s urban landscapes, a pixelated graphic pays tribute to the iconic Telstar ball. Its thermally bonded seamless surface designs.', 2499, 'https://cdn-5c84bc36-b681cbc1.mysagestore.com/b522fd52e101edc926c3308c230445d5/contents/1A1104/thumbnail/big_1A1104.jpg', 3, 1),
                                                                                              ('Kookaburra Senator Cricket Ball', 'Nike Pitch Premier League Football (Yellow/Purple) Ball is made with colorful graphics that stand out on the field for easier ball tracking. A machine-stitched TPU casing delivers great touch and durability during play.', 1525, 'https://cdn-5c84bc36-b681cbc1.mysagestore.com/b522fd52e101edc926c3308c230445d5/contents/1A1110/thumbnail/big_1A1110.jpg', 3, 6),
                                                                                              ('SF Test Special Leather Ball', 'Nike Manchester City Supporters Football (Berry) Ball is made with colorful graphics that stand out on the field for easier ball tracking. A machine-stitched TPU casing delivers great touch and durability during play.', 1525, 'https://stanford.in/wp-content/uploads/2019/09/test-spl-red_0000_ticket-768x768.jpg', 3, 6),
                                                                                              ('SF County Crown Leather Ball', 'Nike Mercurial Veer Football (White/Green/Black) Ball is made with colorful graphics that stand out on the field for easier ball tracking. A machine-stitched TPU casing delivers great touch and durability during play.', 1450, 'https://stanford.in/wp-content/uploads/2019/09/county-crown-red_0002_ticket-768x768.jpg', 3, 6),
                                                                                              ('SS Colt Army Green Camo Cricket Kit Bag (Duffle)', 'The Babolat Team Line racquet bag is highly durable and fashionable, holding up to 12 racquets.', 4550, 'https://www.sstoncricket.com/wp-content/uploads/2023/04/bag_colt-2.jpg', 4, 7),
                                                                                              ('SS Player 3.0 Kit Bag', 'Babolat Pure Strike 12-Pack Bag will effortlessly hold the majority of the rigging you should be fruitful on the court', 9799, 'https://www.sstoncricket.com/wp-content/uploads/2024/02/PLAYERS-3.jpg', 4, 7),
                                                                                              ('SG Drifter Duffle Wheelie Kit Bag', 'Babolat Team Line 12 Racquet Kit Bag (Silver) for players who have tennis in their blood, Babolat brings you the Babolat Tennis Kit Bag India - Babolat Team Line Red 12 Pack.', 4550, 'https://m.media-amazon.com/images/I/31VCWfWt+rL._SY300_SX300_.jpg', 4, 7),
                                                                                              ('SG RP Junior Duffle Trolley Kit Bag', 'Yonex SUNR 4826TK BT6-SR Badminton Kit Bag (Black/Red/White)', 1999, 'https://m.media-amazon.com/images/I/51fZvhYqzkL._SY741_.jpg', 4, 4),
                                                                                              ('Sigma Prestige', 'Yonex SUNR LRB05 MS BT6 S Badminton Kit Bag (Blue/Red)', 1499, 'https://www.sigmacricket.com/wp-content/uploads/2023/12/sigma-cricketkitbag-prestige-600x600.jpg', 4, 4),
                                                                                              ('Sigma BackPack', 'Yonex SUNR LRB05 MS BT6 S Badminton Kit Bag (Grey/Orange)', 1499, 'https://www.sigmacricket.com/wp-content/uploads/2023/12/sigma-cricketkitbag-backpack-600x600.jpg', 4, 4);
