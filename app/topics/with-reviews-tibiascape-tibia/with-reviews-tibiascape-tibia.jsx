import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-tibia');
}

export default function WithReviewsTibiascapeTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-tibia" />;
}
