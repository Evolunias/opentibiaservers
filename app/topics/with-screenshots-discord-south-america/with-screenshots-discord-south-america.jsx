import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-south-america');
}

export default function WithScreenshotsDiscordSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-south-america" />;
}
