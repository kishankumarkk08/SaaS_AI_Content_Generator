-- CreateTable
CREATE TABLE "aiOutput" (
    "id" SERIAL NOT NULL,
    "formData" TEXT NOT NULL,
    "aiResponse" TEXT,
    "slug" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3),

    CONSTRAINT "aiOutput_pkey" PRIMARY KEY ("id")
);
