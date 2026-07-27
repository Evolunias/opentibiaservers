import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-with-reviews-server');
}

export default function ZuneraOt100WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-with-reviews-server" />;
}
