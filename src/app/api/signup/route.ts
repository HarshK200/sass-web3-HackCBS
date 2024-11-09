import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(req: NextRequest) {
  try {
    // get the user email and password from the body
    const { username, email, password } = await req.json();
    if (!username || !email || !password) {
      return NextResponse.json(
        { message: "Err: All fields are required" },
        { status: 400 },
      );
    }

    // check if user already exists by matching it's email in the db
    const User = await prisma.users.findUnique({
      where: {
        email: email,
      },
    });
    if (User) {
      return NextResponse.json(
        {
          message: `Err: Email ${email} is already registered`,
        },
        { status: 400 },
      );
    }

    // CREATING THE USER IN THE DB
    // if user doesn't exits then hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // save the username, email and hashedPassword in the db
    const newUser = await prisma.users.create({
      data: {
        username: username,
        email: email,
        password: hashedPassword,
      },
    });

    res.status(201).json({
      message: `Successfully registered new user ${newUser.username} with email ${newUser.email}`,
      user: {
        username: newUser.username,
        email: newUser.email,
      },
    });
  } catch (err) {
    console.log(err);
    return res
      .status(500)
      .json({ message: "Some error occured during signup" });
  }
}
