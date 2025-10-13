-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `genre` VARCHAR(191) NOT NULL,
    `synopsis` VARCHAR(191) NOT NULL,
    `duration` INTEGER NOT NULL,
    `director` VARCHAR(191) NOT NULL,
    `releaseYear` INTEGER NOT NULL,
    `trailer` VARCHAR(191) NULL,
    `streamUrl` VARCHAR(191) NULL,
    `logo` VARCHAR(191) NULL,
    `backdrop` VARCHAR(191) NULL,
    `poster` VARCHAR(191) NULL,
    `rating` DOUBLE NULL DEFAULT 0,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
