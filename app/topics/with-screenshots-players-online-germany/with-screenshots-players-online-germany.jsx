import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-germany');
}

export default function WithScreenshotsPlayersOnlineGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-germany" />;
}
