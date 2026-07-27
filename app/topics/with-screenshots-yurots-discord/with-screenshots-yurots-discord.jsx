import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-discord');
}

export default function WithScreenshotsYurotsDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-discord" />;
}
