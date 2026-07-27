import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-website');
}

export default function WithReviewsTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-website" />;
}
