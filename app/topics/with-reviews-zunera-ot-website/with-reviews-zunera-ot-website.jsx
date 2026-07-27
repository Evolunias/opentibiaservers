import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-zunera-ot-website');
}

export default function WithReviewsZuneraOtWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-zunera-ot-website" />;
}
