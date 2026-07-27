import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-online');
}

export default function WithScreenshotsMarolaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-online" />;
}
