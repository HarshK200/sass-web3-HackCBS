import { NextRequest, NextResponse } from "next/server";

export async function POST(res: NextRequest) {
  const { username, password } = await res.json();

  console.log("username: ", username);
  console.log("password: ", password);

  return NextResponse.json({ msg: "signed up successfully" });
}
