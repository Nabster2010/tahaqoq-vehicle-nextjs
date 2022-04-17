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
      const vehicleType = await prisma.vehicleType.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicleType) {
        return res.status(404).json({ message: "Vehicle Type not found" });
      }
      res.status(200).json(vehicleType);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    const { name, manufacturerId } = req.body;
    //TODO: Validate the data
    if (!name || !manufacturerId) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const vehicleType = await prisma.vehicleType.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicleType) {
        return res.status(404).json({ message: "Vehicle Type not found" });
      }
      const updatedVehicleType = await prisma.vehicleType.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedVehicleType);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const vehicleType = await prisma.vehicleType.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicleType) {
        return res.status(404).json({ message: "Vehicle Type not found" });
      }
      const deletedVehicleType = await prisma.vehicleType.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedVehicleType);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
