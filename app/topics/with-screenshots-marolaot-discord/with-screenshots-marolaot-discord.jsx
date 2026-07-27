import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-marolaot-discord');
}

export default function WithScreenshotsMarolaotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-marolaot-discord" />;
}
