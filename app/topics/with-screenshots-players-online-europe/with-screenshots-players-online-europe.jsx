import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-europe');
}

export default function WithScreenshotsPlayersOnlineEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-europe" />;
}
