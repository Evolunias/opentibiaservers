import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-discord');
}

export default function WithScreenshotsRealestaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-discord" />;
}
