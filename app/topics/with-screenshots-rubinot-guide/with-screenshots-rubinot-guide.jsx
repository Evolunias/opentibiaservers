import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-guide');
}

export default function WithScreenshotsRubinotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-guide" />;
}
