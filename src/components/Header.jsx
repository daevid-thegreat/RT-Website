import { HeadProvider, Link, Meta, Title } from "react-head";

export default function HeaderSEO({ title, url, description, image }) {
  const LinkOfImage = "https://roadtripcommunity.com" + image;
  const LinkOfUrl = "https://roadtripcommunity.com" + url;

  return (
    <HeadProvider>
      <div className="Home">
        <Title>{title}</Title>
        <Meta property="og:title" content={title} />
        <Link rel="canonical" href={LinkOfUrl} />
        <Meta name="description" content={description} />
        <Meta property="og:description" content={description} />
        <Meta name="keywords" content="Roadtrip, Roadtrip community" />
        <Meta name="robots" content="index, follow" />
        <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta property="og:url" content={LinkOfUrl} />
        <Meta property="og:image" content={LinkOfImage} />
        <Meta property="og:type" content="website" />

        <Meta name="twitter:card" content="summary_large_image" />
        <Meta name="twitter:title" content={title} />
        <Meta name="twitter:description" content={description} />
        <Meta name="twitter:image" content={LinkOfImage} />
      </div>
    </HeadProvider>
  );
}
