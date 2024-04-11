import { Helmet } from "react-helmet";

export default function HeaderSEO({ title, url, description, image }) {
  const LinkOfImage = "https://roadtripcommunity.com" + image;
  const LinkOfUrl = "https://roadtripcommunity.com" + url;

  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <link rel="canonical" href={LinkOfUrl} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="keywords" content="Roadtrip, Roadtrip community" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:url" content={LinkOfUrl} />
      <meta property="og:image" content={LinkOfImage} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={LinkOfImage} />
    </Helmet>
  );
}
