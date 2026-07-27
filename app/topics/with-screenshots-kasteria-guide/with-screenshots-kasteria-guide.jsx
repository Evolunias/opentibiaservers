import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-guide');
}

export default function WithScreenshotsKasteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-guide" />;
}
