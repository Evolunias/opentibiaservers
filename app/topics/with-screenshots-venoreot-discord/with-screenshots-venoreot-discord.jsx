import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-venoreot-discord');
}

export default function WithScreenshotsVenoreotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-venoreot-discord" />;
}
