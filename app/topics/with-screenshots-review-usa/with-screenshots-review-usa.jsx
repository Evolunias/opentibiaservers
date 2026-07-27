import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-usa');
}

export default function WithScreenshotsReviewUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-usa" />;
}
