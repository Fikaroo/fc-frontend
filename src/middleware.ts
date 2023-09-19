import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Clone the request headers and set a new header `x-hello-from-middleware1`
  const cookies = request.cookies.toString();

  console.log(cookies);

  // You can also set request headers in NextResponse.rewrite
  const response = NextResponse.next();

  return response;
}
