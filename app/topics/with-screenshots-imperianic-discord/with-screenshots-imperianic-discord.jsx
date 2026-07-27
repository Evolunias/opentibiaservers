import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-discord');
}

export default function WithScreenshotsImperianicDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-discord" />;
}
