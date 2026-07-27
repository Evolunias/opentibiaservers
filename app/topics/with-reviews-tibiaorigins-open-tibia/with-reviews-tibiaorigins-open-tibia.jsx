import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-open-tibia');
}

export default function WithReviewsTibiaoriginsOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-open-tibia" />;
}
