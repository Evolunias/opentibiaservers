import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-latin-america');
}

export default function WithScreenshotsPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-latin-america" />;
}
