import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-with-reviews-server');
}

export default function Xanteria74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-with-reviews-server" />;
}
