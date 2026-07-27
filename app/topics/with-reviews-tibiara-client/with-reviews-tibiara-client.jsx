import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-client');
}

export default function WithReviewsTibiaraClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-client" />;
}
