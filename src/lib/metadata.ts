import type { MetaFunction } from "react-router";

const BASE_URL = "https://iccv2025-found-workshop.limitlab.xyz";

export const siteMetadata = {
  siteName: "FOUND Workshop",
  baseTitle: "FOUND Workshop at ICCV 2025",
  description:
    "FOUND (Foundation Data for Industrial Tech Transfer) Workshop at ICCV 2025 brings together industry and academic leaders to share advances in adapting foundation models and designing next-generation evaluation tasks.",
  keywords: [
    "ICCV 2025",
    "FOUND Workshop",
    "foundation models",
    "tech transfer",
    "computer vision",
    "foundation data",
  ],
  baseUrl: BASE_URL,
};

type MetaDescriptors = Exclude<ReturnType<MetaFunction>, undefined>;

type CreateMetaArgs = {
  title?: string;
  description?: string;
  path?: string;
};

function resolveUrl(path?: string) {
  if (!path) {
    return siteMetadata.baseUrl;
  }

  if (/^https?:\/\//.test(path)) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return new URL(normalizedPath, siteMetadata.baseUrl).toString();
}

export function createMeta({
  title,
  description,
  path,
}: CreateMetaArgs = {}): MetaDescriptors {
  const pageTitle = title
    ? `${title} | ${siteMetadata.baseTitle}`
    : siteMetadata.baseTitle;
  const pageDescription = description ?? siteMetadata.description;
  const keywords = siteMetadata.keywords.join(", ");
  const canonicalUrl = resolveUrl(path);

  return [
    { title: pageTitle },
    { name: "description", content: pageDescription },
    { name: "keywords", content: keywords },
    { property: "og:title", content: pageTitle },
    { property: "og:description", content: pageDescription },
    { property: "og:url", content: canonicalUrl },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: siteMetadata.siteName },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: pageTitle },
    { name: "twitter:description", content: pageDescription },
    { tagName: "link", rel: "canonical", href: canonicalUrl },
  ];
}
