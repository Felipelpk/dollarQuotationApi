/*
  Warnings:

  - You are about to drop the column `approxDateQuotation` on the `DolarQuotation` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_DolarQuotation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valueForSell" TEXT NOT NULL,
    "valueForBuy" TEXT NOT NULL,
    "dateQuotation" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
INSERT INTO "new_DolarQuotation" ("createdAt", "dateQuotation", "id", "valueForBuy", "valueForSell") SELECT "createdAt", "dateQuotation", "id", "valueForBuy", "valueForSell" FROM "DolarQuotation";
DROP TABLE "DolarQuotation";
ALTER TABLE "new_DolarQuotation" RENAME TO "DolarQuotation";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
