import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-guide');
}

export default function WithScreenshotsTibiantisGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-guide" />;
}
