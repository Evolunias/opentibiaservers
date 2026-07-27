import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-with-reviews-server');
}

export default function Xanteria81WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-with-reviews-server" />;
}
