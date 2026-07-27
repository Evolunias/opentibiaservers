import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-with-reviews-server');
}

export default function Xanteria12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-with-reviews-server" />;
}
