import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-with-reviews-server');
}

export default function Xanteria76WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-with-reviews-server" />;
}
