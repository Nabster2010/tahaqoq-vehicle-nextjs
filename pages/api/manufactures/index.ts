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
      const page = req.query.page && Number(req.query?.page);
      const size = req.query.size && Number(req.query.size);

      if (page && size) {
        const manufacturers = await prisma.vehicleManufacture.findMany({
          skip: (page - 1) * size,
          take: size,
        });
        const totalCount = await prisma.vehicleManufacture.count();
        const totalPages = Math.ceil(totalCount / size);
        res
          .status(200)
          .json({ manufacturers, meta: { page, size, totalPages } });
      } else {
        const manufacturers = await prisma.vehicleManufacture.findMany();

        res
          .status(200)
          .json({
            manufacturers,
            meta: { page: 1, size: manufacturers.length, totalPages: 1 },
          });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    // Process a Get request
  } else if (req.method === "POST") {
    const { name, country } = req.body;
    //TODO: Validate the data
    if (!name || !country) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const manufacture = await prisma.vehicleManufacture.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(manufacture);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }

    //fallback for other methods
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
