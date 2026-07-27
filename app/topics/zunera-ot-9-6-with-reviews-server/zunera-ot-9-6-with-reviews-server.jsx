import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-9-6-with-reviews-server');
}

export default function ZuneraOt96WithReviewsServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-9-6-with-reviews-server" />;
}
