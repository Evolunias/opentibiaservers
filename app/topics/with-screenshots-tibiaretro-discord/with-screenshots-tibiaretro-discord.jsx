import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaretro-discord');
}

export default function WithScreenshotsTibiaretroDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaretro-discord" />;
}
