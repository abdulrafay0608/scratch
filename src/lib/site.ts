import type { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),

  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },

  description: SITE_CONFIG.description,

  applicationName: SITE_CONFIG.name,

  authors: [
    {
      name: SITE_CONFIG.author,
      url: SITE_CONFIG.url,
    },
  ],

  creator: SITE_CONFIG.author,

  publisher: SITE_CONFIG.author,

  keywords: [...SITE_CONFIG.keywords],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,

    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.title,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,

    images: ["/images/og-image.png"],
  },

  category: "technology",
};
