const SOCIAL_IMAGE = "/img/homebanner/banner.png";

export function createPageMetadata({ title, description, path, type = "website" }) {
  const socialTitle = title.toLowerCase().includes("resseaux tech")
    ? title
    : `${title} | Resseaux Tech`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      locale: "en_IN",
      url: path,
      siteName: "Resseaux Tech",
      title: socialTitle,
      description,
      images: [
        {
          url: SOCIAL_IMAGE,
          alt: "Resseaux Tech - IT Infrastructure Solutions",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
    },
  };
}
