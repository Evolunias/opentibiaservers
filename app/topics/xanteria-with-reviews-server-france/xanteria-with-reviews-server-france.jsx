import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-with-reviews-server-france');
}

export default function XanteriaWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="xanteria-with-reviews-server-france" />;
}
