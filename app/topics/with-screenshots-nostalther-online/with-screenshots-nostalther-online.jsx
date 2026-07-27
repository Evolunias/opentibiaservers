import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-online');
}

export default function WithScreenshotsNostaltherOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-online" />;
}
