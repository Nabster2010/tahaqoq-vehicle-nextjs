/*
  Warnings:

  - You are about to drop the column `result` on the `SideSlip` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SideSlip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "reading" REAL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SideSlip_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SideSlip" ("createdAt", "id", "reading", "vehicleId") SELECT "createdAt", "id", "reading", "vehicleId" FROM "SideSlip";
DROP TABLE "SideSlip";
ALTER TABLE "new_SideSlip" RENAME TO "SideSlip";
CREATE UNIQUE INDEX "SideSlip_vehicleId_key" ON "SideSlip"("vehicleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
