import { NextResponse, type NextRequest } from "next/server";
import { draftRoutes } from "@/data/draft-routes";

export function proxy(request: NextRequest) {
  if (!draftRoutes.has(request.nextUrl.pathname)) {
    return NextResponse.next();
  }

  const response = NextResponse.next();
  response.headers.set("X-Robots-Tag", "noindex, follow");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*$).*)"],
};
