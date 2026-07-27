import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-tibia');
}

export default function WithReviewsTibiaraTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-tibia" />;
}
