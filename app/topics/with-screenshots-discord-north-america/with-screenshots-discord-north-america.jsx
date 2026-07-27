import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-north-america');
}

export default function WithScreenshotsDiscordNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-north-america" />;
}
