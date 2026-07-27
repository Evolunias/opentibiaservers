import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-official');
}

export default function WithReviewsTibiaraOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-official" />;
}
