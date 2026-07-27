import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-europe');
}

export default function WithScreenshotsReviewEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-europe" />;
}
