import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-website');
}

export default function WithReviewsXanteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-website" />;
}
