import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-france');
}

export default function WithScreenshotsDiscordFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-france" />;
}
