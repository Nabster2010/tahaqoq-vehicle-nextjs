-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "role" TEXT DEFAULT 'GUEST',
    "password" TEXT,
    "active" BOOLEAN DEFAULT false,
    "image" TEXT
);
INSERT INTO "new_User" ("active", "email", "emailVerified", "id", "image", "name", "password", "role") SELECT "active", "email", "emailVerified", "id", "image", "name", "password", "role" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
