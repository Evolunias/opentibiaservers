import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-ots');
}

export default function WithReviewsTibianusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-ots" />;
}
