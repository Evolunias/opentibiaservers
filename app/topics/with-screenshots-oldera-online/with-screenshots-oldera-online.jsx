import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-online');
}

export default function WithScreenshotsOlderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-online" />;
}
