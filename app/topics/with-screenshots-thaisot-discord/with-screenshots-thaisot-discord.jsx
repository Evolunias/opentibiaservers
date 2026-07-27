import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-discord');
}

export default function WithScreenshotsThaisotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-discord" />;
}
