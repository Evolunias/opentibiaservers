import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-discord');
}

export default function WithScreenshotsTibiameDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-discord" />;
}
