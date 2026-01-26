import { Helmet } from 'react-helmet-async';

const SEO = ({
  title = 'Tzaddi Fatalla - Engineering Portfolio',
  description = 'Innovative engineer specializing in IoT solutions, application development, and prototyping. Helping startups and small businesses transform ideas into functional solutions.',
  keywords = 'IoT engineer, application development, prototyping, engineering portfolio, tech solutions, Philippines',
  author = 'Tzaddi Fatalla',
  image = 'https://engrtjaetzad.online/og-image.jpg',
  url = 'https://engrtjaetzad.online',
  type = 'website',
}) => {
  const siteTitle = 'Tzaddi Fatalla - Engineering Portfolio';
  const fullTitle = title === siteTitle ? title : `${title} | ${siteTitle}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@yourusername" />

      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <link rel="canonical" href={url} />
    </Helmet>
  );
};

export default SEO;