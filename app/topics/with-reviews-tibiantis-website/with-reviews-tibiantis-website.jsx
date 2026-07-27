import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-website');
}

export default function WithReviewsTibiantisWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-website" />;
}
