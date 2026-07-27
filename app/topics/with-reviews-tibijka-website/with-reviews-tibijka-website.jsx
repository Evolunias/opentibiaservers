import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-website');
}

export default function WithReviewsTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-website" />;
}
