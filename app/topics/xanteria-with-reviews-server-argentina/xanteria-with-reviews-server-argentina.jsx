import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-argentina');
}

export default function XanteriaWithReviewsServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-argentina" />;
}
