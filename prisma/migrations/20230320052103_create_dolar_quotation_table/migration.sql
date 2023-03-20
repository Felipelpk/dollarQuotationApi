-- CreateTable
CREATE TABLE "DolarQuotation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "valueForSell" TEXT NOT NULL,
    "valueForBuy" TEXT NOT NULL,
    "dateQuotation" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
