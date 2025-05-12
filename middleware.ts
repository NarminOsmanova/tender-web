// // middleware.ts
// import createMiddleware from "next-intl/middleware";
// import { NextRequest, NextResponse } from "next/server";

// // Create the next-intl middleware for localization
// const intlMiddleware = createMiddleware({
//   locales: ["en", "az", "ru"],
//   defaultLocale: "en",
//   localePrefix: "always",
// });

// export default function middleware(request: NextRequest) {
//   try {
//     // Get the pathname of the request
//     const { pathname } = request.nextUrl;
    
//     // First, let's handle the intl middleware
//     const response = intlMiddleware(request);

//     // Get locale from the path
//     let locale = request.nextUrl.pathname.split('/')[1];
    
//     // If locale is not valid, use default
//     if (!["en", "az", "ru"].includes(locale)) {
//       locale = "en";
//     }

//     // Set the language cookie
//     response.cookies.set('NEXT_LOCALE', locale, {
//       path: '/',
//       secure: process.env.NODE_ENV === 'production',
//       sameSite: 'lax',
//       maxAge: 60 * 60 * 24 * 365 // 1 year
//     });

//     return response;
//   } catch (error) {
//     console.error("Middleware error:", error);
//     // In case of error, continue to the requested resource
//     return NextResponse.next();
//   }
// }

// export const config = {
//   // Match all paths except for:
//   // - API routes (/api/*)
//   // - Next.js specific files (/_next/*)
//   // - Static files (images, assets) with file extensions
//   matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
// };

// middleware.ts
import createMiddleware from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";

// next-intl middleware konfiqurasiya
const intlMiddleware = createMiddleware({
  locales: ["en", "az", "ru"],
  defaultLocale: "en",
  localePrefix: "always",
});

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // URL-in birinci segmentini yoxla
  const locale = pathname.split('/')[1];

  // Əgər locale mövcud deyilsə və kök URL-dir ("/"), defaultLocale-a yönləndir
  if (!["en", "az", "ru"].includes(locale)) {
    const defaultLocaleUrl = new URL(`/en${pathname}`, request.url);
    return NextResponse.redirect(defaultLocaleUrl);
  }

  // Əks halda next-intl middleware davam etsin
  return intlMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/"],
};
