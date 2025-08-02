-- AlterTable
ALTER TABLE "public"."user" ADD COLUMN     "password" TEXT,
ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL;
