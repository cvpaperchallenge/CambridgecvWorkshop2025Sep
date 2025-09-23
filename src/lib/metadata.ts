import type { MetaFunction } from "react-router";

const BASE_URL = "https://cambridgecvworkshop.limitlab.xyz";

export const siteMetadata = {
  siteName: "Cambridge Computer Vision Workshop",
  baseTitle: "Cambridge Computer Vision Workshop 2025",
  description:
    "Cambridge Computer Vision Workshop 2025 gathers researchers in Cambridge and LIMIT.Lab to share advances around computer vision and machine learning.",
  keywords: [
    "Cambridge Computer Vision Workshop",
    "computer vision",
    "machine learning",
    "Cambridge University",
    "LIMIT.Lab",
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
