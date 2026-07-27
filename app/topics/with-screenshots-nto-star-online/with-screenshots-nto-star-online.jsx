import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-online');
}

export default function WithScreenshotsNtoStarOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-online" />;
}
