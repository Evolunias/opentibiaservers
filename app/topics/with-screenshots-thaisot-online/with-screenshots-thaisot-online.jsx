import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-online');
}

export default function WithScreenshotsThaisotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-online" />;
}
