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
        const colors = await prisma.color.findMany({
          skip: (page - 1) * size,
          take: size,
        });
        const totalCount = await prisma.color.count();
        const totalPages = Math.ceil(totalCount / size);
        res.status(200).json({ colors, meta: { page, size, totalPages } });
      } else {
        const colors = await prisma.color.findMany();

        res.status(200).json({
          colors,
          meta: { page: 1, size: colors.length, totalPages: 1 },
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }
  } else if (req.method === "POST") {
    const { name, tName } = req.body;
    //TODO: Validate the data
    if (!name || !tName) {
      return res
        .status(400)
        .json({ message: "Please provide all the required fields" });
    }
    try {
      const color = await prisma.color.create({
        data: {
          ...req.body,
        },
      });
      res.status(200).json(color);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error?.message });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
