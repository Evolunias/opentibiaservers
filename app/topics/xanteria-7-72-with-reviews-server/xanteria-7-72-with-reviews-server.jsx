import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-with-reviews-server');
}

export default function Xanteria772WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-with-reviews-server" />;
}
