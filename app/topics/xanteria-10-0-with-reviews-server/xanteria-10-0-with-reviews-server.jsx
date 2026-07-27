import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-with-reviews-server');
}

export default function Xanteria100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-with-reviews-server" />;
}
