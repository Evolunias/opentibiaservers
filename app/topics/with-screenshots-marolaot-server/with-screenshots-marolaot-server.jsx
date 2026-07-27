import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-server');
}

export default function WithScreenshotsMarolaotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-server" />;
}
