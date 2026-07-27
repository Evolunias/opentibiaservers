import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-discord');
}

export default function WithScreenshotsNepreniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-discord" />;
}
