-- CreateTable
CREATE TABLE "cakes" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "price" DECIMAL(65,2) NOT NULL,
    "description" TEXT NOT NULL,
    "image" VARCHAR(255) NOT NULL,

    CONSTRAINT "cakes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "clients" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "address" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,

    CONSTRAINT "clients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "clientId" INTEGER NOT NULL,
    "cakeId" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TEXT NOT NULL,
    "totalPrice" DECIMAL(65,2) NOT NULL,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cakes_name_key" ON "cakes"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clients_name_key" ON "clients"("name");

-- CreateIndex
CREATE UNIQUE INDEX "clients_address_key" ON "clients"("address");

-- CreateIndex
CREATE UNIQUE INDEX "clients_phone_key" ON "clients"("phone");

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_cakeId_fkey" FOREIGN KEY ("cakeId") REFERENCES "cakes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "orders" ADD CONSTRAINT "orders_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "clients"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
