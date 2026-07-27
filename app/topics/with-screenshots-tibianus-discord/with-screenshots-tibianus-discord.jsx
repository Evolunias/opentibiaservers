import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-discord');
}

export default function WithScreenshotsTibianusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-discord" />;
}
