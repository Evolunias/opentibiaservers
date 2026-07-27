import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-brazil');
}

export default function WithScreenshotsPlayersOnlineBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-brazil" />;
}
