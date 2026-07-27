import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-website');
}

export default function WithReviewsUnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-website" />;
}
