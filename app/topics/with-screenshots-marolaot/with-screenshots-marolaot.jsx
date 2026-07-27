import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot');
}

export default function WithScreenshotsMarolaotKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot" />;
}
