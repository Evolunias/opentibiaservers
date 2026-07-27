import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-discord');
}

export default function WithScreenshotsOtmadnessDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-discord" />;
}
