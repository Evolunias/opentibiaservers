import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-online');
}

export default function WithScreenshotsYurotsOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-online" />;
}
