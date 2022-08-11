import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const session = await getSession({ req });
  if (!session || session.user.role === "GUEST") {
    return res
      .status(401)
      .json({ message: "Not authenticated or not Authorized" });
  }
  const { id } = req.query;
  if (req.method === "GET") {
    try {
      const manufacture = await prisma.vehicleManufacture.findUnique({
        where: { id: Number(id) },
      });
      if (!manufacture) {
        return res.status(404).json({ message: "Manufacture not found" });
      }
      res.status(200).json(manufacture);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    const { name, country } = req.body;
    //TODO: Validate the data
    if (!name || !country) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const manufacture = await prisma.vehicleManufacture.findUnique({
        where: { id: Number(id) },
      });
      if (!manufacture) {
        return res.status(404).json({ message: "Manufacture not found" });
      }
      const updatedManufacture = await prisma.vehicleManufacture.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedManufacture);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const manufacture = await prisma.vehicleManufacture.findUnique({
        where: { id: Number(id) },
      });
      if (!manufacture) {
        return res.status(404).json({ message: "Manufacture not found" });
      }
      const deletedManufacture = await prisma.vehicleManufacture.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedManufacture);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
