import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-rules');
}

export default function WithReviewsTibiameRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-rules" />;
}
