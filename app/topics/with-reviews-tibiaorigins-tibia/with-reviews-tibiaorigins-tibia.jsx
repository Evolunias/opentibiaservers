import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-tibia');
}

export default function WithReviewsTibiaoriginsTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-tibia" />;
}
