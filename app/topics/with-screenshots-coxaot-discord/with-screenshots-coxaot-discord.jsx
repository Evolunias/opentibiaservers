import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-coxaot-discord');
}

export default function WithScreenshotsCoxaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-coxaot-discord" />;
}
