import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-sweden');
}

export default function WithScreenshotsPlayersOnlineSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-sweden" />;
}
