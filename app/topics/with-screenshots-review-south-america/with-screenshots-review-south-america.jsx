import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-south-america');
}

export default function WithScreenshotsReviewSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-south-america" />;
}
