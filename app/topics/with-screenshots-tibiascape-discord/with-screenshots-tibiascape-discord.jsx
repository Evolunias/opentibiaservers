import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-discord');
}

export default function WithScreenshotsTibiascapeDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-discord" />;
}
