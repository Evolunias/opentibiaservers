import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-madnessalive-discord');
}

export default function WithScreenshotsMadnessaliveDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-madnessalive-discord" />;
}
