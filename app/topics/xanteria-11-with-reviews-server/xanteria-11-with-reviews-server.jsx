import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-with-reviews-server');
}

export default function Xanteria11WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-with-reviews-server" />;
}
