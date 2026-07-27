import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-online');
}

export default function WithScreenshotsTibiascapeOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-online" />;
}
