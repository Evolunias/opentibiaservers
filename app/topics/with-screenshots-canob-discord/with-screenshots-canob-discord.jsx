import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-discord');
}

export default function WithScreenshotsCanobDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-discord" />;
}
