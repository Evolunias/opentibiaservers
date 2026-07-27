import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-guide');
}

export default function WithScreenshotsThorniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-guide" />;
}
