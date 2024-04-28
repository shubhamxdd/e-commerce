import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
// import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  // destructure email, name, password from request body

  const { email, name, password, username } = await request.json();

  if (email === "" || name === "" || password === "" || username === "") {
    throw new Error("Missing fields");
  }

  //   hash the password

  //   const hashedPassword = await bcrypt.hash(password, 10);

  //   create user

  const user = await prisma.user.create({
    data: {
      email,
      name,
      password,
      username,
    },
  });

  return NextResponse.json(user);
}
