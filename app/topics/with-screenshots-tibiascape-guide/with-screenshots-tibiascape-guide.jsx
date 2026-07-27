import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-guide');
}

export default function WithScreenshotsTibiascapeGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-guide" />;
}
