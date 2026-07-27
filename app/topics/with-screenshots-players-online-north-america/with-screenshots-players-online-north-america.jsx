import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-north-america');
}

export default function WithScreenshotsPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-north-america" />;
}
