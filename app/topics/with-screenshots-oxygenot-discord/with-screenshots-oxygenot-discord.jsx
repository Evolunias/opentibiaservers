import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oxygenot-discord');
}

export default function WithScreenshotsOxygenotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oxygenot-discord" />;
}
