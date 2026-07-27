import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-online');
}

export default function WithScreenshotsElderaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-online" />;
}
