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
      const sideSlipResult = await prisma.sideSlip.findUnique({
        where: { id: Number(id) },
      });
      if (!sideSlipResult) {
        return res.status(404).json({ message: "Side slip result  not found" });
      }
      res.status(200).json(sideSlipResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    try {
      const sideSlipResult = await prisma.sideSlip.findUnique({
        where: { id: Number(id) },
      });
      if (!sideSlipResult) {
        return res.status(404).json({ message: "Side slip result not found" });
      }
      const updatedSideSlipResult = await prisma.sideSlip.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedSideSlipResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const sideSlipResult = await prisma.sideSlip.findUnique({
        where: { id: Number(id) },
      });
      if (!sideSlipResult) {
        return res.status(404).json({ message: "Side slip result not found" });
      }
      const deletedSideSlipResult = await prisma.sideSlip.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedSideSlipResult);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
