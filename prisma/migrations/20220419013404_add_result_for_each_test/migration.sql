/*
  Warnings:

  - You are about to alter the column `result` on the `SideSlip` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Boolean`.

*/
-- AlterTable
ALTER TABLE "Brake" ADD COLUMN "result" BOOLEAN;

-- AlterTable
ALTER TABLE "Emission" ADD COLUMN "result" BOOLEAN;

-- AlterTable
ALTER TABLE "HighBeamLevel" ADD COLUMN "result" BOOLEAN;

-- AlterTable
ALTER TABLE "Suspension" ADD COLUMN "result" BOOLEAN;

-- AlterTable
ALTER TABLE "VisualInspection" ADD COLUMN "result" BOOLEAN;

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_SideSlip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "reading" REAL,
    "result" BOOLEAN,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SideSlip_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_SideSlip" ("createdAt", "id", "result", "vehicleId") SELECT "createdAt", "id", "result", "vehicleId" FROM "SideSlip";
DROP TABLE "SideSlip";
ALTER TABLE "new_SideSlip" RENAME TO "SideSlip";
CREATE UNIQUE INDEX "SideSlip_vehicleId_key" ON "SideSlip"("vehicleId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
