import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-with-reviews-server');
}

export default function Xanteria15WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-with-reviews-server" />;
}
