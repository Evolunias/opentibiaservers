import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-reviews-server-france');
}

export default function YurotsWithReviewsServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-reviews-server-france" />;
}
