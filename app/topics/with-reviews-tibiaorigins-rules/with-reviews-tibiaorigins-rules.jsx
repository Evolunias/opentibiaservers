import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-rules');
}

export default function WithReviewsTibiaoriginsRulesKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-rules" />;
}
