import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-discord');
}

export default function WithScreenshotsLumineraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-discord" />;
}
