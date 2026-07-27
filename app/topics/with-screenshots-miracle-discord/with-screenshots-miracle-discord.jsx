import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-miracle-discord');
}

export default function WithScreenshotsMiracleDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-miracle-discord" />;
}
