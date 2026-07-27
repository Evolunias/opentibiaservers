import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-online');
}

export default function WithScreenshotsCyntaraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-online" />;
}
