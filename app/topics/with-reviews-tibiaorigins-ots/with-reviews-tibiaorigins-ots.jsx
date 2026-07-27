import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-ots');
}

export default function WithReviewsTibiaoriginsOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-ots" />;
}
