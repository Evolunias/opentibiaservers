import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-mexico');
}

export default function WithScreenshotsReviewMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-mexico" />;
}
