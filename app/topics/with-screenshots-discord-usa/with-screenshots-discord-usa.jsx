import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-usa');
}

export default function WithScreenshotsDiscordUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-usa" />;
}
