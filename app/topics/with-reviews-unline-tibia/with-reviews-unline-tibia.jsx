import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-tibia');
}

export default function WithReviewsUnlineTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-tibia" />;
}
