import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-online');
}

export default function WithScreenshotsTibijkaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-online" />;
}
