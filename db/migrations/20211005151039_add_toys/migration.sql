/*
  Warnings:

  - You are about to drop the column `pets` on the `Corgi` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Corgi" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "name" TEXT NOT NULL,
    "toys" INTEGER NOT NULL DEFAULT 0,
    "boops" INTEGER NOT NULL DEFAULT 0,
    "image" TEXT
);
INSERT INTO "new_Corgi" ("boops", "createdAt", "id", "image", "name", "updatedAt") SELECT "boops", "createdAt", "id", "image", "name", "updatedAt" FROM "Corgi";
DROP TABLE "Corgi";
ALTER TABLE "new_Corgi" RENAME TO "Corgi";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
