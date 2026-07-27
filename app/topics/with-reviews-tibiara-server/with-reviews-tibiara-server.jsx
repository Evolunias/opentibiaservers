import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-server');
}

export default function WithReviewsTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-server" />;
}
