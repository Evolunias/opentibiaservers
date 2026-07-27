import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-online');
}

export default function WithScreenshotsMediviaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-online" />;
}
