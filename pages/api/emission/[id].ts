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
      const emissionResult = await prisma.emission.findUnique({
        where: { id: Number(id) },
      });
      if (!emissionResult) {
        return res
          .status(404)
          .json({ message: "Emission result info not found" });
      }
      res.status(200).json(emissionResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    try {
      const emissionResult = await prisma.emission.findUnique({
        where: { id: Number(id) },
      });
      if (!emissionResult) {
        return res.status(404).json({ message: "Emission result not found" });
      }
      const updatedEmissionResult = await prisma.emission.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedEmissionResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const emissionResult = await prisma.emission.findUnique({
        where: { id: Number(id) },
      });
      if (!emissionResult) {
        return res.status(404).json({ message: "Emission result not found" });
      }
      const deletedEmissionResult = await prisma.emission.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedEmissionResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
