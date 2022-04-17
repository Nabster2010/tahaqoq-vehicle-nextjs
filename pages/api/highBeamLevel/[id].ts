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
      const highBeamResult = await prisma.highBeamLevel.findUnique({
        where: { id: Number(id) },
      });
      if (!highBeamResult) {
        return res.status(404).json({ message: "High beam result  not found" });
      }
      res.status(200).json(highBeamResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    try {
      const highBeamResult = await prisma.highBeamLevel.findUnique({
        where: { id: Number(id) },
      });
      if (!highBeamResult) {
        return res.status(404).json({ message: "high beam result not found" });
      }
      const updatedHighBeamResult = await prisma.highBeamLevel.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedHighBeamResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const highBeamResult = await prisma.highBeamLevel.findUnique({
        where: { id: Number(id) },
      });
      if (!highBeamResult) {
        return res.status(404).json({ message: "High beam result not found" });
      }
      const deletedHighBeamResult = await prisma.highBeamLevel.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedHighBeamResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
