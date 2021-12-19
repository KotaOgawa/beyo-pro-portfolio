/*
  Warnings:

  - You are about to alter the column `body` on the `Comment` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(700)`.
  - You are about to alter the column `title` on the `Thread` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(255)`.

*/
-- AlterTable
ALTER TABLE "Comment" ALTER COLUMN "body" DROP NOT NULL,
ALTER COLUMN "body" SET DATA TYPE VARCHAR(700);

-- AlterTable
ALTER TABLE "Thread" ADD COLUMN     "body" TEXT,
ALTER COLUMN "title" SET DATA TYPE VARCHAR(255);
