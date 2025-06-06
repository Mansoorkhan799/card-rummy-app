'use client';

import { useEffect, useState } from 'react';

interface JsonLdProps {
  type: 'Organization' | 'WebSite' | 'SoftwareApplication' | 'FAQPage' | 'Product';
  data: Record<string, any>;
}

export default function JsonLd({ type, data }: JsonLdProps) {
  const [jsonLD, setJsonLD] = useState('');

  useEffect(() => {
    // Prepare the JSON-LD script based on the type
    let jsonLdObject = {};
    
    switch (type) {
      case 'Organization':
        jsonLdObject = {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: data.name,
          url: data.url,
          logo: data.logo,
          sameAs: data.sameAs,
          contactPoint: data.contactPoint,
        };
        break;
      case 'WebSite':
        jsonLdObject = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: data.name,
          url: data.url,
          potentialAction: {
            '@type': 'SearchAction',
            target: `${data.url}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        };
        break;
      case 'SoftwareApplication':
        jsonLdObject = {
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: data.name,
          operatingSystem: data.operatingSystem,
          applicationCategory: data.applicationCategory,
          offers: {
            '@type': 'Offer',
            price: data.price,
            priceCurrency: data.priceCurrency,
          },
          aggregateRating: data.aggregateRating,
        };
        break;
      case 'FAQPage':
        jsonLdObject = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })),
        };
        break;
      case 'Product':
        jsonLdObject = {
          '@context': 'https://schema.org',
          '@type': 'Product',
          name: data.name,
          description: data.description,
          image: data.image,
          offers: {
            '@type': 'Offer',
            price: data.price,
            priceCurrency: data.priceCurrency,
            availability: data.availability,
            url: data.url,
          },
        };
        break;
      default:
        break;
    }
    
    setJsonLD(JSON.stringify(jsonLdObject));
  }, [type, data]);

  if (!jsonLD) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonLD }}
    />
  );
} 