import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-discord');
}

export default function WithScreenshotsMediviaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-discord" />;
}
