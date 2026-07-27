import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-website');
}

export default function WithScreenshotsMarolaotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-website" />;
}
