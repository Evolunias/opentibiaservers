import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-online');
}

export default function WithScreenshotsNepreniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-online" />;
}
