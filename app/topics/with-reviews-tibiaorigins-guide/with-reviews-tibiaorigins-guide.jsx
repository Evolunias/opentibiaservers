import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-guide');
}

export default function WithReviewsTibiaoriginsGuideKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-guide" />;
}
