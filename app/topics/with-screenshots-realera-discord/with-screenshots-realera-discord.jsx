import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-discord');
}

export default function WithScreenshotsRealeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-discord" />;
}
