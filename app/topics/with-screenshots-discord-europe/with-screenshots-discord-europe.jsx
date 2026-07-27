import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-europe');
}

export default function WithScreenshotsDiscordEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-europe" />;
}
