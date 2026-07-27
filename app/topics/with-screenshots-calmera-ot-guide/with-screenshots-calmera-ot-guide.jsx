import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-calmera-ot-guide');
}

export default function WithScreenshotsCalmeraOtGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-calmera-ot-guide" />;
}
