import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-online');
}

export default function WithScreenshotsSabrehavenOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-online" />;
}
