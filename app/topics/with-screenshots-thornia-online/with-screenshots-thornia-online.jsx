import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-online');
}

export default function WithScreenshotsThorniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-online" />;
}
