import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-ots');
}

export default function WithReviewsTibiantisOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-ots" />;
}
