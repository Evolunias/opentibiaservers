import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-poland');
}

export default function WithScreenshotsPlayersOnlinePolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-poland" />;
}
