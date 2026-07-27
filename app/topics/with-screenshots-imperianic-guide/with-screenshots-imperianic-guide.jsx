import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-guide');
}

export default function WithScreenshotsImperianicGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-guide" />;
}
