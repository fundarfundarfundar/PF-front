/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextResponse } from "next/server";

export function middleware(req: any) {
  console.log("🔥 MIDDLEWARE SE ESTÁ EJECUTANDO");
  return NextResponse.next();
}

export const config = {
  matcher: ["/(.*)"],
};
