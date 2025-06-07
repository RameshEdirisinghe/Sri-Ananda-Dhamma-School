import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { User } from "@/models/user.model";
import { signToken } from "@/lib/auth";

export async function POST(req: Request) {
  await connectDB();
  const { email, password } = await req.json();

  const user = await User.findOne({ email });
  if (!user || !await bcrypt.compare(password, user.passwordHash)) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  const token = signToken({ id: user._id, role: user.role });

  const res = NextResponse.json({ role: user.role });
  res.cookies.set("token", token, {
    httpOnly: true,
    sameSite: "strict",
    path: "/"
  });

  return res;
}
