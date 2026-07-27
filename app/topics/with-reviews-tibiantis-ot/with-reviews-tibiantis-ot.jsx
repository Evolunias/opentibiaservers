import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-ot');
}

export default function WithReviewsTibiantisOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-ot" />;
}
