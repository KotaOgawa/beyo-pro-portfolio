/*
  Warnings:

  - Made the column `body` on table `Comment` required. This step will fail if there are existing NULL values in that column.
  - Made the column `body` on table `Thread` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "body" SET NOT NULL;

-- AlterTable
ALTER TABLE "Thread" ALTER COLUMN "body" SET NOT NULL;
