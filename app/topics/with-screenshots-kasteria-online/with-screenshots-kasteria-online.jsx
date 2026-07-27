import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-online');
}

export default function WithScreenshotsKasteriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-online" />;
}
