import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-ot');
}

export default function WithReviewsTibianusOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-ot" />;
}
