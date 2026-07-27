import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-north-america');
}

export default function WithScreenshotsReviewNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-north-america" />;
}
