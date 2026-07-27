import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-website');
}

export default function WithReviewsTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-website" />;
}
