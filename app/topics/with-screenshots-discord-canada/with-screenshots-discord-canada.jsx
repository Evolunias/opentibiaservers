import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-canada');
}

export default function WithScreenshotsDiscordCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-canada" />;
}
