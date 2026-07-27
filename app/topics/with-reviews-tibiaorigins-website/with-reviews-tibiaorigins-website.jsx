import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-website');
}

export default function WithReviewsTibiaoriginsWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-website" />;
}
