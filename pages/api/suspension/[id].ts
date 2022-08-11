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
      const suspensionResult = await prisma.suspension.findUnique({
        where: { id: Number(id) },
      });
      if (!suspensionResult) {
        return res
          .status(404)
          .json({ message: "Suspension result  not found" });
      }
      res.status(200).json(suspensionResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    const { fl, fr, rl, rr, vehicleId } = req.body;
    if (!fl || !fr || !rl || !rr || !vehicleId) {
      res.status(400).json({ message: "please provide all the fields" });
    }
    try {
      const suspensionResult = await prisma.suspension.findUnique({
        where: { id: Number(id) },
      });
      if (!suspensionResult) {
        return res.status(404).json({ message: "Suspension result not found" });
      }
      const updatedSuspensionResult = await prisma.suspension.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedSuspensionResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const suspensionResult = await prisma.suspension.findUnique({
        where: { id: Number(id) },
      });
      if (!suspensionResult) {
        return res.status(404).json({ message: "Suspension result not found" });
      }
      const deletedSuspensionResult = await prisma.suspension.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedSuspensionResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
