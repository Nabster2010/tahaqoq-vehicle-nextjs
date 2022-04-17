import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest, ev: NextFetchEvent) {
  //   return NextResponse.next();
  //   console.log(req.headers);
  return NextResponse.next();
}
