import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCurrentUser } from "./actions/authActions";

const AuthRoute = ["/login", "/register"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const user = await getCurrentUser();

  if (!user) {
    if (AuthRoute.includes(pathname)) {
      return NextResponse.next();
    }
    return NextResponse.redirect(
      new URL(`/login?redirect=${pathname}`, request.url)
    );
  }
  type Role = keyof typeof roleBaseRoutes;
  const roleBaseRoutes = {
    user: [/^\/user/],
    admin: [/^\/admin/],
  };

  //   role base authentication

  if (user?.role && roleBaseRoutes[user?.role as Role]) {
    const routes = roleBaseRoutes[user?.role as Role];

    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/login", "/register", "/user/:path*", "/admin/:page*"],
};
