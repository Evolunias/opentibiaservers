import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-sweden');
}

export default function WithScreenshotsDiscordSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-sweden" />;
}
