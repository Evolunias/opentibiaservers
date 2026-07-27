import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-discord');
}

export default function WithScreenshotsMidhemDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-discord" />;
}
