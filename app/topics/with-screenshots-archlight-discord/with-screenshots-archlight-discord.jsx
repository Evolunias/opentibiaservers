import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-discord');
}

export default function WithScreenshotsArchlightDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-discord" />;
}
