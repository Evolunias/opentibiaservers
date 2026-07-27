import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-uk');
}

export default function WithScreenshotsReviewUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-uk" />;
}
