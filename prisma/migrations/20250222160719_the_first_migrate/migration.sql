-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('AGENT', 'CLIENT', 'TRADER', 'PROVIDER');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "rebate" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "rebateAccount" TEXT,
    "agentCount" INTEGER NOT NULL DEFAULT 0,
    "totalClients" INTEGER NOT NULL DEFAULT 0,
    "directClients" INTEGER NOT NULL DEFAULT 0,
    "totalLoginTrade" INTEGER NOT NULL DEFAULT 0,
    "deposit" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "withdraw" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "netDeposit" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "rebateAmount" DOUBLE PRECISION NOT NULL DEFAULT 0.0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
