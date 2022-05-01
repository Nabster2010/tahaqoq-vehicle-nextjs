import { NextApiRequest, NextApiResponse } from "next";
import { getSession } from "next-auth/react";
import prisma from "../../../lib/prisma";
import { getVisualInspectionResult } from "../../../utils";

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
      const visualInspection = await prisma.visualInspection.findUnique({
        where: { id: Number(id) },
      });
      if (!visualInspection) {
        return res
          .status(404)
          .json({ message: "Visual Inspection info not found" });
      }
      res.status(200).json(visualInspection);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    try {
      const visualInspection = await prisma.visualInspection.findUnique({
        where: { id: Number(id) },
      });
      if (!visualInspection) {
        return res.status(404).json({ message: "Visual inspection not found" });
      }
      const updatedVisualInspection = await prisma.visualInspection.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
          result: getVisualInspectionResult(req.body),
        },
      });
      res.status(200).json(updatedVisualInspection);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const visualInspection = await prisma.visualInspection.findUnique({
        where: { id: Number(id) },
      });
      if (!visualInspection) {
        return res.status(404).json({ message: "Visual inspection not found" });
      }
      const deletedVisualInspection = await prisma.visualInspection.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedVisualInspection);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
