import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-online');
}

export default function WithScreenshotsMiracleOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-online" />;
}
