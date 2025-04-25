// "use client";

// import { useEffect } from "react";

// export default function ClientBody({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Remove any extension-added classes during hydration
//   useEffect(() => {
//     // This runs only on the client after hydration
//     document.body.className = "min-h-screen bg-white font-sans antialiased" ;
//   }, []);

//   return <>{children}</>;
// }
"use client";

import { useFont } from "@/context/FontContext";
import { barlow, montserrat, mulish, poppins, roboto } from "@/fonts";

export default function ClientBody({ children }: { children: React.ReactNode }) {
  const { font } = useFont();

  const getFontClass = () => {
    switch (font) {
      case "Poppins":
        return poppins.className;
      case "Montserrat":
        return montserrat.className;
      case "Mulish":
        return mulish.className;
      case "Roboto":
        return roboto.className;
      case "Barlow":
      default:
        return barlow.className;
    }
  };
  const fontClass = getFontClass();
  return (
    <html lang="en" className={fontClass}>
      <body className={`antialiased min-h-screen bg-white ${fontClass}`} cz-shortcut-listen="true">
        {children}
      </body>
    </html>
  );
}
