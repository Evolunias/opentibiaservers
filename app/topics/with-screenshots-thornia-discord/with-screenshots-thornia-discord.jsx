import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-discord');
}

export default function WithScreenshotsThorniaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-discord" />;
}
