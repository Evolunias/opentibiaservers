import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-official');
}

export default function WithReviewsTibijkaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-official" />;
}
