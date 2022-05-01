/*
  Warnings:

  - You are about to alter the column `result` on the `SideSlip` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Float`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SideSlip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "reading" REAL,
    "result" REAL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SideSlip_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SideSlip" ("createdAt", "id", "reading", "result", "vehicleId") SELECT "createdAt", "id", "reading", "result", "vehicleId" FROM "SideSlip";
DROP TABLE "SideSlip";
ALTER TABLE "new_SideSlip" RENAME TO "SideSlip";
CREATE UNIQUE INDEX "SideSlip_vehicleId_key" ON "SideSlip"("vehicleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
