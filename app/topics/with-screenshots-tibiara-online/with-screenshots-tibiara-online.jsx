import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-online');
}

export default function WithScreenshotsTibiaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-online" />;
}
