import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-login');
}

export default function WithScreenshotsMarolaotLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-login" />;
}
