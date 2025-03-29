import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((auth, req) => {
  const url = new URL(req.url);
  const pathname = url.pathname;

  // Define valid static routes
  const validStaticRoutes = ["/", "/dashboard", "/create", "/api/generate"];

  // Define valid dynamic routes
  const dynamicRoutes = [/^\/post\/\d+$/, /^\/edit\/\d+$/];

  // Check if the route is valid
  const isValidRoute =
    validStaticRoutes.includes(pathname) ||
    dynamicRoutes.some((pattern) => pattern.test(pathname));

  // Redirect invalid routes to home
  if (!isValidRoute) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next(); // Continue processing if the route is valid
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
