import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-tibia');
}

export default function WithReviewsTibiameTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-tibia" />;
}
