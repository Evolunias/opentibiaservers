import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-online');
}

export default function WithScreenshotsRealeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-online" />;
}
