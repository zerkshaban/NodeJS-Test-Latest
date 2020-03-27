CREATE TABLE `game` (
  `game_type` int PRIMARY KEY,
  `game` varchar(255)
);

CREATE TABLE `countries_to_game` (
  `game_type` int,
  `country_id` int
);

CREATE TABLE `countries` (
  `country_id` int PRIMARY KEY,
  `country_name` varchar(255)
);

CREATE TABLE `player_countries_betting_from` (
  `country_id` int,
  `player_id` int
);

CREATE TABLE `player` (
  `player_id` int PRIMARY KEY,
  `player_name` varchar(255),
  `favorite_game` varchar(255)
);

ALTER TABLE `countries_to_game` ADD FOREIGN KEY (`game_type`) REFERENCES `countries` (`country_id`);

ALTER TABLE `countries_to_game` ADD FOREIGN KEY (`country_id`) REFERENCES `game` (`game_type`);

ALTER TABLE `player_countries_betting_from` ADD FOREIGN KEY (`country_id`) REFERENCES `player` (`player_id`);

ALTER TABLE `player_countries_betting_from` ADD FOREIGN KEY (`player_id`) REFERENCES `countries` (`country_id`);
