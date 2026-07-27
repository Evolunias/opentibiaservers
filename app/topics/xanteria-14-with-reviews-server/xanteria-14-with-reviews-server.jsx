import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-with-reviews-server');
}

export default function Xanteria14WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-with-reviews-server" />;
}
