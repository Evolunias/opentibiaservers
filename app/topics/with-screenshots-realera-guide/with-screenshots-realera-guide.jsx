import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-guide');
}

export default function WithScreenshotsRealeraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-guide" />;
}
