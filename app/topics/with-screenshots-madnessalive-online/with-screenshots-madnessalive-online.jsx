import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-online');
}

export default function WithScreenshotsMadnessaliveOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-online" />;
}
