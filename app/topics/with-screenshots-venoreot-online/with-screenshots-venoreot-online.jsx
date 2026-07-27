import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-online');
}

export default function WithScreenshotsVenoreotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-online" />;
}
