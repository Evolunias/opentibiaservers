import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-discord');
}

export default function WithScreenshotsKasteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-discord" />;
}
