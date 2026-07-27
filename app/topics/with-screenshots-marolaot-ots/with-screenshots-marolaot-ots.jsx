import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-ots');
}

export default function WithScreenshotsMarolaotOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-ots" />;
}
