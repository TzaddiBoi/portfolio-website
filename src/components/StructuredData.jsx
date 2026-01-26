import { Helmet } from 'react-helmet-async';

const StructuredData = () => {
  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Tzaddi Fatalla',
    jobTitle: 'Engineering Student & Developer',
    url: 'https://engrtjaetzad.online',
    image: 'https://engrtjaetzad.online/profile.jpg',
    email: 'tzaddi@engrtjaetzad.online',
    telephone: '+639123456789',
    address: {
      '@type': '5200',
      addressLocality: 'Oriental Mindoro',
      addressCountry: 'PH',
    },
    sameAs: [
      'https://github.com/TzaddiBoi',
      'https://linkedin.com/in/yourusername',
    ],
    knowsAbout: [
      'IoT Solutions',
      'Application Development',
      'Prototyping',
      'Technical Consulting',
      'Python',
      'JavaScript',
      'Arduino',
    ],
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Tzaddi Fatalla Portfolio',
    url: 'https://engrtjaetzad.online',
    description: 'Professional engineering portfolio showcasing IoT solutions, application development, and prototyping projects.',
    author: {
      '@type': 'Person',
      name: 'Tzaddi Fatalla',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(personSchema)}</script>
      <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
    </Helmet>
  );
};

export default StructuredData;