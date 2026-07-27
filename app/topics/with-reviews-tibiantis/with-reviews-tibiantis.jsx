import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis');
}

export default function WithReviewsTibiantisKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis" />;
}
