import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-uk');
}

export default function WithScreenshotsPlayersOnlineUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-uk" />;
}
