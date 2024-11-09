import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prismaClient = new PrismaClient();

export async function POST(res: NextRequest) {
  // HACK: remove this sh*t later just for testing
  const handcodedAddress = "4JQMXHJpWpMXQihmgez8bScVeeDkHnnJM21TkBZjAhpp";
  const existingUser = await prismaClient.uploader.findFirst({
    where: {
      address: handcodedAddress,
    },
  });

  if (existingUser) {
    const token = jwt.sign(
      {
        userId: existingUser.id,
      },
      process.env.JWT_SECRET!,
    );

    return NextResponse.json({ token: token }, { status: 200 });
  } else {
    const user = await prismaClient.uploader.create({
      data: {
        address: handcodedAddress,
      },
    });

    const token = jwt.sign(
      {
        userId: user.id,
      },
      process.env.JWT_SECRET!,
    );

    return token;
  }
}
