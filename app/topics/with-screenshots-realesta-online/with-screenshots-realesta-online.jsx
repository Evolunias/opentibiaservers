import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-online');
}

export default function WithScreenshotsRealestaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-online" />;
}
