-- CreateTable
CREATE TABLE "ToDo" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "title" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "ToDo_id_key" ON "ToDo"("id");
