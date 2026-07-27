import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-sweden');
}

export default function WithScreenshotsReviewSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-sweden" />;
}
