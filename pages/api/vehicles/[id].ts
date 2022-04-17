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
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: Number(id) },
        include: {
          customer: true,
          vehicleInfo: true,
          visualInspection: true,
          emissionTest: true,
          highBeamLevel: true,
          sideSlip: true,
          suspensionTest: true,
          brakeTest: true,
        },
      });
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      res.status(200).json(vehicle);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    const {
      vin,
      reqNo,
      reqDate,
      bayanNo,
      bayanDate,
      port,
      paymentType,
      price,
      tax,
      customerId,
    } = req.body;
    //TODO: Validate the data
    if (
      !vin ||
      !reqNo ||
      !reqDate ||
      !bayanNo ||
      !bayanDate ||
      !port ||
      !paymentType ||
      !price ||
      !tax ||
      !customerId
    ) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      const updatedVehicle = await prisma.vehicle.update({
        where: { id: Number(id) },
        data: {
          bayanDate,
          bayanNo,
          customerId,
          reqDate,
          reqNo,
          paymentType,
          port,
          price,
          tax,
          vin,
        },
      });
      res.status(200).json(updatedVehicle);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const vehicle = await prisma.vehicle.findUnique({
        where: { id: Number(id) },
      });
      if (!vehicle) {
        return res.status(404).json({ message: "Vehicle not found" });
      }
      const deletedVehicle = await prisma.vehicle.delete({
        where: { id: Number(id) },
        include: {
          vehicleInfo: true,
          visualInspection: true,
          emissionTest: true,
          highBeamLevel: true,
          sideSlip: true,
          suspensionTest: true,
          brakeTest: true,
        },
      });
      res.status(200).json(deletedVehicle);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
