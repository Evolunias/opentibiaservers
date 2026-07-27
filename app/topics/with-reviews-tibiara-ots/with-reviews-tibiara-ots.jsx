import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-ots');
}

export default function WithReviewsTibiaraOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-ots" />;
}
