import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-website');
}

export default function WithReviewsTibiameWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-website" />;
}
