import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolunia-discord');
}

export default function WithScreenshotsEvoluniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolunia-discord" />;
}
