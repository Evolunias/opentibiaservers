import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-online');
}

export default function WithScreenshotsMistOfDeathOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-online" />;
}
