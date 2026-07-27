import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-ot-server');
}

export default function WithReviewsTibiaraOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-ot-server" />;
}
