import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-with-reviews-server');
}

export default function ZuneraOt74WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-with-reviews-server" />;
}
