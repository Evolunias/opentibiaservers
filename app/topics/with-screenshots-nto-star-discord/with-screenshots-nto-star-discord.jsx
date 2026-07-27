import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-discord');
}

export default function WithScreenshotsNtoStarDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-discord" />;
}
