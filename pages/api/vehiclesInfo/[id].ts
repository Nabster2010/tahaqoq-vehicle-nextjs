import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session) {
    return res.status(401).json({ message: "Not authenticated" });
  }
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const vehicleInfo = await prisma.vehicleInfo.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicleInfo) {
        return res.status(404).json({ message: "Vehicle info not found" });
      }
      res.status(200).json(vehicleInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    const {
      vehicleId,
      seats,
      colorId,
      year,
      vehicleTypeId,
      category,
      condition,
      engineSize,
      fuelType,
      mileage,
    } = req.body;
    //TODO: Validate the data
    if (
      !vehicleId ||
      !colorId ||
      !seats ||
      !year ||
      !vehicleTypeId ||
      !category ||
      !condition ||
      !fuelType ||
      !engineSize ||
      !mileage
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const vehicleInfo = await prisma.vehicleInfo.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicleInfo) {
        return res.status(404).json({ message: "Vehicle info not found" });
      }
      const updatedVehicleInfo = await prisma.vehicleInfo.update({
        where: { id: Number(id) },
        data: {
          seats,
          colorId,
          year,
          vehicleTypeId,
          category,
          condition,
          engineSize,
          fuelType,
          mileage,
          // ...req.body,
        },
      });
      res.status(200).json(updatedVehicleInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }
  } else if (req.method === "DELETE") {
    try {
      const vehicleInfo = await prisma.vehicleInfo.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicleInfo) {
        return res.status(404).json({ message: "vehicle Info not found" });
      }
      const deletedVehicleInfo = await prisma.vehicleInfo.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedVehicleInfo);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
