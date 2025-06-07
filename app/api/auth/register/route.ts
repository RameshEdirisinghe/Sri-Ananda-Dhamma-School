import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/db";
import { User } from "@/models/user.model";

export async function POST(req: Request) {
  await connectDB();
  const { email, password, role } = await req.json();

  const exists = await User.findOne({ email });
  if (exists) return NextResponse.json({ message: "Already registered" }, { status: 400 });

  const passwordHash = await bcrypt.hash(password, 10);
  await User.create({ email, passwordHash, role: role || 'user' });

  return NextResponse.json({ message: "Registered successfully" });
}
