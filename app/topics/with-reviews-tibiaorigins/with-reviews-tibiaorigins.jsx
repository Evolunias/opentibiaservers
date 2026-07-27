import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins');
}

export default function WithReviewsTibiaoriginsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins" />;
}
