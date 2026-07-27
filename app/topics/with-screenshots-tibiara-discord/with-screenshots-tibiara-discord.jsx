import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-discord');
}

export default function WithScreenshotsTibiaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-discord" />;
}
