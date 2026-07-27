import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-mexico');
}

export default function WithScreenshotsDiscordMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-mexico" />;
}
