import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-tibia');
}

export default function WithReviewsXanteriaTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-tibia" />;
}
