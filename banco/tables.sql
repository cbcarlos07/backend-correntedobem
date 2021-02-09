-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema correntedobem
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema correntedobem
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `correntedobem` DEFAULT CHARACTER SET utf8 ;
USE `correntedobem` ;

-- -----------------------------------------------------
-- Table `correntedobem`.`area`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `correntedobem`.`area` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(100) NULL,
  `description` TEXT NULL,
  `order` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `correntedobem`.`plano_tatico`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `correntedobem`.`plano_tatico` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `titie` VARCHAR(200) NULL,
  `description` TEXT NULL,
  `order` INT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `correntedobem`.`area_plano`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `correntedobem`.`area_plano` (
  `area_id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `plano_tatico_id` INT UNSIGNED NOT NULL,
  INDEX `fk_area_plano_area_idx` (`area_id` ASC) VISIBLE,
  INDEX `fk_area_plano_plano_tatico1_idx` (`plano_tatico_id` ASC) VISIBLE,
  CONSTRAINT `fk_area_plano_area`
    FOREIGN KEY (`area_id`)
    REFERENCES `correntedobem`.`area` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_area_plano_plano_tatico1`
    FOREIGN KEY (`plano_tatico_id`)
    REFERENCES `correntedobem`.`plano_tatico` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `correntedobem`.`equipe`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `correntedobem`.`equipe` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `plano_tatico_id` INT UNSIGNED NOT NULL,
  `name` VARCHAR(255) NULL,
  `order` INT NULL,
  `parent_id` INT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_equipe_plano_tatico1_idx` (`plano_tatico_id` ASC) VISIBLE,
  CONSTRAINT `fk_equipe_plano_tatico1`
    FOREIGN KEY (`plano_tatico_id`)
    REFERENCES `correntedobem`.`plano_tatico` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `correntedobem`.`arrecadacao`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `correntedobem`.`arrecadacao` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(200) NULL,
  `value` DECIMAL(13,2) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `correntedobem`.`usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `correntedobem`.`usuario` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `password` TEXT NULL,
  `token` TEXT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `correntedobem`.`meta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `correntedobem`.`meta` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `logo` VARCHAR(255) NULL,
  `description` TEXT NULL,
  `image` VARCHAR(255) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `correntedobem`.`usuario`
-- -----------------------------------------------------
START TRANSACTION;
USE `correntedobem`;
INSERT INTO `correntedobem`.`usuario` (`id`, `name`, `email`, `password`, `token`) VALUES (1, 'Carlos Bruno', 'cbcarlos08@gmail.com', '25d55ad283aa400af464c76d713c07ad', NULL);

COMMIT;

