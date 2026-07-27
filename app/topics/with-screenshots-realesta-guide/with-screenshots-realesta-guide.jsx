import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-guide');
}

export default function WithScreenshotsRealestaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-guide" />;
}
