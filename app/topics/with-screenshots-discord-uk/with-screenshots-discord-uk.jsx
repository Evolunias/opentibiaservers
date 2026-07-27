import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-uk');
}

export default function WithScreenshotsDiscordUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-uk" />;
}
