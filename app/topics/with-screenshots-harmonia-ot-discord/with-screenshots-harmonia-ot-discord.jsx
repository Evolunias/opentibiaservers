import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-discord');
}

export default function WithScreenshotsHarmoniaOtDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-discord" />;
}
