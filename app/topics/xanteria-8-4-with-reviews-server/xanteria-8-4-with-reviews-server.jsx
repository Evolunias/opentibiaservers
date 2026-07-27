import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-4-with-reviews-server');
}

export default function Xanteria84WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-4-with-reviews-server" />;
}
