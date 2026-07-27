import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-online');
}

export default function WithScreenshotsArchlightOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-online" />;
}
