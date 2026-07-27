import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-online');
}

export default function WithScreenshotsCarlinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-online" />;
}
