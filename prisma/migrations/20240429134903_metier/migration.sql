-- AlterTable
ALTER TABLE `agent` ADD COLUMN `age` INTEGER NOT NULL DEFAULT 20,
    ADD COLUMN `metier` VARCHAR(191) NOT NULL DEFAULT 'etudiants';
