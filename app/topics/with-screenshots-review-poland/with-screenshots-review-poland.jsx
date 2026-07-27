import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-poland');
}

export default function WithScreenshotsReviewPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-poland" />;
}
