import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-official');
}

export default function WithScreenshotsMarolaotOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-official" />;
}
