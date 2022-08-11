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
      const color = await prisma.color.findUnique({
        where: { id: Number(id) },
      });
      if (!color) {
        return res.status(404).json({ message: "Color not found" });
      }
      res.status(200).json(color);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "PUT") {
    const { name, tName } = req.body;
    //TODO: Validate the data
    if (!name || !tName) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const color = await prisma.color.findUnique({
        where: { id: Number(id) },
      });
      if (!color) {
        return res.status(404).json({ message: "Color not found" });
      }
      const updatedColor = await prisma.color.update({
        where: { id: Number(id) },
        data: {
          ...req.body,
        },
      });
      res.status(200).json(updatedColor);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else if (req.method === "DELETE") {
    try {
      const color = await prisma.color.findUnique({
        where: { id: Number(id) },
      });
      if (!color) {
        return res.status(404).json({ message: "Color not found" });
      }
      const deletedColor = await prisma.color.delete({
        where: { id: Number(id) },
      });
      res.status(200).json(deletedColor);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
