import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-guide');
}

export default function WithScreenshotsAmeriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-guide" />;
}
