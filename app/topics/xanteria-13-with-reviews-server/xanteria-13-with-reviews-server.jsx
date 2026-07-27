import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-with-reviews-server');
}

export default function Xanteria13WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-with-reviews-server" />;
}
