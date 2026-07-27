import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-cyntara-discord');
}

export default function WithScreenshotsCyntaraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-cyntara-discord" />;
}
