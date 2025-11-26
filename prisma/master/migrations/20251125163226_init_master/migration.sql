-- DropIndex
DROP INDEX `GameOngoingUsers_userId_key` ON `GameOngoingUsers`;

-- AlterTable
ALTER TABLE `GameOngoingUsers` MODIFY `userId` VARCHAR(191) NULL;
