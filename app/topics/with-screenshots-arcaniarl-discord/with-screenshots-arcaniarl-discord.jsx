import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-arcaniarl-discord');
}

export default function WithScreenshotsArcaniarlDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-arcaniarl-discord" />;
}
