import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-online');
}

export default function WithScreenshotsNilotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-online" />;
}
