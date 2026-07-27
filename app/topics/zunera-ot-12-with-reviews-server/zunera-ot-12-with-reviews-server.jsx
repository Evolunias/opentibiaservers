import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-with-reviews-server');
}

export default function ZuneraOt12WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-with-reviews-server" />;
}
