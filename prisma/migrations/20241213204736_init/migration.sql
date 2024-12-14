-- CreateTable
CREATE TABLE "User" (
    "userId" SERIAL NOT NULL,
    "firstName" VARCHAR(256) NOT NULL,
    "lastName" VARCHAR(256) NOT NULL,
    "email" VARCHAR(256) NOT NULL,
    "phone" VARCHAR(256),
    "password" VARCHAR(256) NOT NULL,
    "userType" VARCHAR(256) NOT NULL DEFAULT 'BASIC',
    "userStatus" VARCHAR(256) NOT NULL DEFAULT 'INACTIVE',
    "isSetupComplete" BOOLEAN NOT NULL DEFAULT false,
    "accessCode" VARCHAR(256),
    "resetCode" VARCHAR(256),
    "lastLogin" BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,
    "lastActive" BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,
    "dateCreated" BIGINT NOT NULL DEFAULT (EXTRACT(EPOCH FROM now()) * 1000)::bigint,

    CONSTRAINT "User_pkey" PRIMARY KEY ("userId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
