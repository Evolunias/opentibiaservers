import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-online');
}

export default function WithScreenshotsClassickDrakoriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-online" />;
}
