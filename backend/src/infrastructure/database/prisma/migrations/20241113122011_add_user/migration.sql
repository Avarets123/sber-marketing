-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "firstName" VARCHAR(150) NOT NULL,
    "lastName" VARCHAR(150),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "deletedAt" TIMESTAMP(3),

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
