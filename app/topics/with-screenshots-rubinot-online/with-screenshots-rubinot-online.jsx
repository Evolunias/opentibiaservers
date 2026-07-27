import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-online');
}

export default function WithScreenshotsRubinotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-online" />;
}
