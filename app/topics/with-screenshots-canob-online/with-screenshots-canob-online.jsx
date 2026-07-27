import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-online');
}

export default function WithScreenshotsCanobOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-online" />;
}
