import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-website');
}

export default function WithReviewsTibianusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-website" />;
}
