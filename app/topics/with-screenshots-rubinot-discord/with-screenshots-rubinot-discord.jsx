import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-discord');
}

export default function WithScreenshotsRubinotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-discord" />;
}
