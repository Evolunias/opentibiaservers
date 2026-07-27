import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-discord');
}

export default function WithScreenshotsClassicusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-discord" />;
}
