import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-guide');
}

export default function WithScreenshotsMarolaotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-guide" />;
}
