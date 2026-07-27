import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-guide');
}

export default function WithScreenshotsCanobGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-guide" />;
}
