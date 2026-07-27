import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-discord');
}

export default function WithScreenshotsTibijkaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-discord" />;
}
