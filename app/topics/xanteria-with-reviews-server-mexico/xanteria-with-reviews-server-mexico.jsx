import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-mexico');
}

export default function XanteriaWithReviewsServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-mexico" />;
}
