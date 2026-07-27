import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-argentina');
}

export default function WithScreenshotsDiscordArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-argentina" />;
}
