import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-rules');
}

export default function WithReviewsXanteriaRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-rules" />;
}
