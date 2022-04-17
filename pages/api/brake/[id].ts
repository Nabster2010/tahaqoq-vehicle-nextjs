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
      const brakeResult = await prisma.brake.findUnique({
        where: { id: Number(id) },
      });
      if (!brakeResult) {
        return res.status(404).json({ message: "Brake result  not found" });
      }
      res.status(200).json(brakeResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    const { parking, front, rear } = req.body;
    if (!parking || !front || !rear) {
      return res.status(400).json({ message: "Please provide all fields" });
    }
    try {
      const brakeResult = await prisma.brake.findUnique({
        where: { id: Number(id) },
      });
      if (!brakeResult) {
        return res.status(404).json({ message: "Brake result not found" });
      }
      const updatedBrakeResult = await prisma.brake.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedBrakeResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const brakeResult = await prisma.brake.findUnique({
        where: { id: Number(id) },
      });
      if (!brakeResult) {
        return res.status(404).json({ message: "Brake result not found" });
      }
      const deletedBrakeResult = await prisma.brake.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedBrakeResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
