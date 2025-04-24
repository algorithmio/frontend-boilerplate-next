import RootProvider from "@/providers/RootProvider";
// import { Inter } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@/styles/global.css";
import { Notifications } from "@mantine/notifications";
import BarProgressProvider from "@/providers/BarProgressProvider";
import "@bprogress/core/css";

export const metadata = {
  description: "Sub Ke Liye",
  icons: {
    icon: [
      //! Android Icons

      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/favicon/android-icon-192x192.png",
      },

      //! Apple Icons

      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        url: "/favicon/apple-icon-180x180.png",
      },

      //! Favion Icons
      { rel: "icon", type: "image/ico", url: "/favicon/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon/favicon-32x32.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        url: "/favicon/favicon-96x96.png",
      },
    ],

    //! Other Icons
    other: [
      {
        rel: "apple-touch-icon-precomposed",
        url: "/favicon/apple-icon-precomposed.png",
      },
    ],
  },
  manifest: "/favicon/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      // className={inter.className}
    >
      <head>
        {/* ===== Search Engine Optimization ===== */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#4f46e5" />

        {/* ===== Social Media Meta ===== */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta
          property="og:image"
          content="https://yourdomain.com/og-image.png"
        />
        <meta property="og:url" content="http://usemaktab.com/" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <BarProgressProvider>
          <RootProvider>
            <Notifications position="bottom-center" limit={3} />
            {children}
          </RootProvider>
        </BarProgressProvider>
      </body>
    </html>
  );
}
