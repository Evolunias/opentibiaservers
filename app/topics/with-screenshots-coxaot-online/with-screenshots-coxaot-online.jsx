import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-online');
}

export default function WithScreenshotsCoxaotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-online" />;
}
