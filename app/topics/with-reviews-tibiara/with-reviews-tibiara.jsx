import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara');
}

export default function WithReviewsTibiaraKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara" />;
}
