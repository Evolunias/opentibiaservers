import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-latin-america');
}

export default function WithScreenshotsDiscordLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-latin-america" />;
}
