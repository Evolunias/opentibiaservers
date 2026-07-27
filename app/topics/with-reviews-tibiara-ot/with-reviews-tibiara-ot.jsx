import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-ot');
}

export default function WithReviewsTibiaraOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-ot" />;
}
