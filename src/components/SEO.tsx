import { Helmet } from "react-helmet-async";

type JsonLdObject = Record<string, unknown>;

type SEOProps = {
  title: string;
  description: string;
  canonical: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  ogType?: "website" | "article";
  robots?: string;
  jsonLd?: JsonLdObject[];
};

const SEO = ({
  title,
  description,
  canonical,
  image,
  imageWidth,
  imageHeight,
  ogType = "website",
  robots = "index,follow",
  jsonLd = [],
}: SEOProps) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      {imageWidth && imageHeight && (
        <meta property="og:image:width" content={String(imageWidth)} />
      )}
      {imageWidth && imageHeight && (
        <meta property="og:image:height" content={String(imageHeight)} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;
