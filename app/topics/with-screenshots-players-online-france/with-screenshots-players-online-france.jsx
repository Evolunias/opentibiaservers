import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-players-online-france');
}

export default function WithScreenshotsPlayersOnlineFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-players-online-france" />;
}
