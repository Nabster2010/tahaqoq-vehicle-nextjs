-- CreateTable
CREATE TABLE "Customer" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "taxId" TEXT NOT NULL,
    "customerType" TEXT NOT NULL DEFAULT 'INDIVIDUAL'
);

-- CreateTable
CREATE TABLE "VehicleManufacture" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "country" TEXT
);

-- CreateTable
CREATE TABLE "VehicleType" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "manufacturerId" INTEGER NOT NULL,
    CONSTRAINT "VehicleType_manufacturerId_fkey" FOREIGN KEY ("manufacturerId") REFERENCES "VehicleManufacture" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Color" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT,
    "tName" TEXT
);

-- CreateTable
CREATE TABLE "Vehicle" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vin" TEXT,
    "reqNo" TEXT,
    "reqDate" TEXT,
    "bayanNo" TEXT,
    "bayanDate" TEXT,
    "port" TEXT,
    "paymentType" TEXT DEFAULT 'CARD',
    "price" INTEGER,
    "tax" INTEGER,
    "customerId" INTEGER,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Vehicle_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "Customer" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VehicleInfo" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "colorId" INTEGER NOT NULL,
    "year" TEXT NOT NULL,
    "vehicleTypeId" INTEGER NOT NULL,
    "category" TEXT NOT NULL DEFAULT 'PASSENGER',
    "condition" TEXT NOT NULL DEFAULT 'USED',
    "fuelType" TEXT NOT NULL DEFAULT 'PETROL',
    "engine" TEXT,
    "engineSize" TEXT,
    "gear" TEXT DEFAULT 'AUTOMATIC',
    "mileage" TEXT NOT NULL,
    "seats" TEXT NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VehicleInfo_vehicleTypeId_fkey" FOREIGN KEY ("vehicleTypeId") REFERENCES "VehicleType" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VehicleInfo_colorId_fkey" FOREIGN KEY ("colorId") REFERENCES "Color" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "VehicleInfo_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "VisualInspection" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "conformityCertificate" INTEGER DEFAULT 1,
    "isTaxi" INTEGER DEFAULT 1,
    "isArmoured" INTEGER DEFAULT 1,
    "isSalvage" INTEGER DEFAULT 1,
    "isPolice" INTEGER DEFAULT 1,
    "vehiclePaint" INTEGER DEFAULT 1,
    "vehicleChassis" INTEGER DEFAULT 1,
    "vehiclePlate" INTEGER DEFAULT 1,
    "installationPoints" INTEGER DEFAULT 1,
    "brakeSystem" INTEGER DEFAULT 1,
    "wiringSystem" INTEGER DEFAULT 1,
    "headLights" INTEGER DEFAULT 1,
    "parkingLights" INTEGER DEFAULT 1,
    "signalLights" INTEGER DEFAULT 1,
    "warningLights" INTEGER DEFAULT 1,
    "horn" INTEGER DEFAULT 1,
    "windshield" INTEGER DEFAULT 1,
    "wipers" INTEGER DEFAULT 1,
    "tinting" INTEGER DEFAULT 1,
    "mirrors" INTEGER DEFAULT 1,
    "doors" INTEGER DEFAULT 1,
    "tires" INTEGER DEFAULT 1,
    "nuts" INTEGER DEFAULT 1,
    "dashboardLights" INTEGER DEFAULT 1,
    "tailLights" INTEGER DEFAULT 1,
    "reverseLights" INTEGER DEFAULT 1,
    "rearPlateLight" INTEGER DEFAULT 1,
    "turnSignalLights" INTEGER DEFAULT 1,
    "brakeLights" INTEGER DEFAULT 1,
    "saftyBelts" INTEGER DEFAULT 1,
    "vehicleBody" INTEGER DEFAULT 1,
    "fireExtinguisher" INTEGER DEFAULT 1,
    "warningTriangle" INTEGER DEFAULT 1,
    "spareTire" INTEGER DEFAULT 1,
    "rustCorrosion" INTEGER DEFAULT 1,
    "sunVisors" INTEGER DEFAULT 1,
    "ballJoints" INTEGER DEFAULT 1,
    "mountingBase" INTEGER DEFAULT 1,
    "steeringCircuit" INTEGER DEFAULT 1,
    "steeringRods" INTEGER DEFAULT 1,
    "hosesPipes" INTEGER DEFAULT 1,
    "brakeDiscs" INTEGER DEFAULT 1,
    "brakeCylinders" INTEGER DEFAULT 1,
    "fittings" INTEGER DEFAULT 1,
    "stabilizerBar" INTEGER DEFAULT 1,
    "frontSuspension" INTEGER DEFAULT 1,
    "rearSuspension" INTEGER DEFAULT 1,
    "frontSprings" INTEGER DEFAULT 1,
    "rearSprings" INTEGER DEFAULT 1,
    "shockAbsorbers" INTEGER DEFAULT 1,
    "engineMountings" INTEGER DEFAULT 1,
    "gearMountings" INTEGER DEFAULT 1,
    "transimissionParts" INTEGER DEFAULT 1,
    "mufflers" INTEGER DEFAULT 1,
    "fuelTank" INTEGER DEFAULT 1,
    "speedometerCable" INTEGER DEFAULT 1,
    "chassis" INTEGER DEFAULT 1,
    "floorRust" INTEGER DEFAULT 1,
    "oilLeaks" INTEGER DEFAULT 1,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "VisualInspection_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Emission" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "co" REAL,
    "hc" INTEGER,
    "diesel" INTEGER,
    "ppm" INTEGER,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Emission_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "HighBeamLevel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "level" INTEGER,
    "left" INTEGER,
    "right" INTEGER,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "HighBeamLevel_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SideSlip" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "result" REAL NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "SideSlip_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Suspension" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "fl" INTEGER NOT NULL,
    "fr" INTEGER NOT NULL,
    "rl" INTEGER NOT NULL,
    "rr" INTEGER NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Suspension_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Brake" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "vehicleId" INTEGER NOT NULL,
    "parking" INTEGER NOT NULL,
    "front" INTEGER NOT NULL,
    "rear" INTEGER NOT NULL,
    "createdAt" DATETIME DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "Brake_vehicleId_fkey" FOREIGN KEY ("vehicleId") REFERENCES "Vehicle" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "role" TEXT DEFAULT 'USER',
    "password" TEXT,
    "active" BOOLEAN DEFAULT false,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "VehicleInfo_vehicleId_key" ON "VehicleInfo"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "VisualInspection_vehicleId_key" ON "VisualInspection"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Emission_vehicleId_key" ON "Emission"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "HighBeamLevel_vehicleId_key" ON "HighBeamLevel"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "SideSlip_vehicleId_key" ON "SideSlip"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Suspension_vehicleId_key" ON "Suspension"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Brake_vehicleId_key" ON "Brake"("vehicleId");

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");
