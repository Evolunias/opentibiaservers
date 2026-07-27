import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-guide');
}

export default function WithScreenshotsXanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-guide" />;
}
