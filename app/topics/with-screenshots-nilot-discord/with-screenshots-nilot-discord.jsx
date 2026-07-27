import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nilot-discord');
}

export default function WithScreenshotsNilotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nilot-discord" />;
}
