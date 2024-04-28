import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/prisma";
// import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
  // destructure email, name, password from request body

  const { email, name, password, username } = await request.json();

  if (email === "" || name === "" || password === "" || username === "") {
    return NextResponse.json(
      {
        error: "Missing fields",
      },
      { status: 400 }
    );
  }

  const userExists = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userExists) {
    return NextResponse.json(
      {
        error: "User already exists",
      },
      { status: 400 }
    );
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
