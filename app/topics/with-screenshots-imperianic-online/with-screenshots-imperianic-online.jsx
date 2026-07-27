import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-online');
}

export default function WithScreenshotsImperianicOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-online" />;
}
