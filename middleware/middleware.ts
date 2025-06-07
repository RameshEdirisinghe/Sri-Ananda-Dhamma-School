import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "../lib/auth";

interface JwtPayload {
  id: string;
  role: 'admin' | 'user';
  email?: string;
}

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (req.nextUrl.pathname.startsWith("/admin")) {
    if (!token) return NextResponse.redirect(new URL("/login", req.url));

    try {
      const payload = verifyToken(token) as JwtPayload;

      if (payload.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    } catch {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
