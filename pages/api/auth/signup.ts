import { hash } from "bcryptjs";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  //Only POST mothod is accepted
  if (req.method === "POST") {
    //Getting email and password from body
    const { email, password, name } = req.body;
    //Validate
    if (!email || !email.includes("@") || !password || !name) {
      res.status(422).json({ message: "Invalid Data" });
      return;
    }
    //Connect with database
    const checkExisting = await prisma.user.findUnique({
      where: { email },
    });

    //Check existing

    if (checkExisting) {
      //Send error response if duplicate user is found
      res.status(422).json({ message: "User already exists" });
      return;
    }
    //Hash password
    const hashedPassword = await hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
      },
    });
    //Send success response
    res.status(201).json({ message: "User created", ...user });
  } else {
    //Response for other than POST method
    res.status(405).json({ message: "Method not allowed" });
  }
}
