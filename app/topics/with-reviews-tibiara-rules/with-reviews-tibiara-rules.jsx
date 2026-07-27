import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-rules');
}

export default function WithReviewsTibiaraRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-rules" />;
}
