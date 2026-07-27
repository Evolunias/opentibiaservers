import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-discord');
}

export default function WithScreenshotsEvoleraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-discord" />;
}
