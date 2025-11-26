/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `GameOngoingUsers` will be added. If there are existing duplicate values, this will fail.
  - Made the column `userId` on table `GameOngoingUsers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `GameOngoingUsers` MODIFY `userId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `GameOngoingUsers_userId_key` ON `GameOngoingUsers`(`userId`);
