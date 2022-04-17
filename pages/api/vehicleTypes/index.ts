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
  if (req.method === "GET") {
    try {
      let page = req.query.page ? parseInt(req.query.page as string) : 1;
      let size = req.query.size ? parseInt(req.query.size as string) : 5;
      if (size > 10) size = 10;
      const vehicleTypes = await prisma.vehicleType.findMany({
        include: {
          manufacturer: true,
        },
        skip: (page - 1) * size,
        take: size,
      });
      const totalCount = await prisma.vehicleType.count();
      const totalPages = Math.ceil(totalCount / size);
      res.status(200).json({ vehicleTypes, meta: { page, size, totalPages } });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "POST") {
    const { name, manufacturerId } = req.body;
    //TODO: Validate the data
    if (!name || !manufacturerId) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const vehicleType = await prisma.vehicleType.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(vehicleType);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
