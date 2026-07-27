import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-open-tibia');
}

export default function WithReviewsXanteriaOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-open-tibia" />;
}
