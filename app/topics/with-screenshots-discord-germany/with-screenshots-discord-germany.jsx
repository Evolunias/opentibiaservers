import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-germany');
}

export default function WithScreenshotsDiscordGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-germany" />;
}
