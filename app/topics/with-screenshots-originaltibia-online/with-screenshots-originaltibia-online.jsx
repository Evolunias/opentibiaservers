import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-online');
}

export default function WithScreenshotsOriginaltibiaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-online" />;
}
