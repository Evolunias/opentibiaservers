import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-54-with-reviews-server');
}

export default function Xanteria854WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-54-with-reviews-server" />;
}
