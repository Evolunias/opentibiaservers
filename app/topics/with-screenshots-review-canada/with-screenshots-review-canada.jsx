import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-canada');
}

export default function WithScreenshotsReviewCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-canada" />;
}
