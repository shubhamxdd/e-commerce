import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  const isAuth = await isAuthenticated(request);

  if (!isAuth) {
    return new NextResponse("username and password is 'admin' ", {
      status: 401,
      headers: {
        "WWW-Authenticate": "Basic",
      },
    });
  }
}

async function isAuthenticated(request: NextRequest) {
  const authHeader =
    request.headers.get("Authorization") ||
    request.headers.get("authorization");

  if (!authHeader) {
    return false;
  }

  const [username, password] = Buffer.from(authHeader.split(" ")[1], "base64")
    .toString()
    .split(":");

  //   console.log({ username, password });

  return (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  );
}

export const config = {
  matcher: "/admin/:path*",
};
