import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-germany');
}

export default function WithScreenshotsReviewGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-germany" />;
}
