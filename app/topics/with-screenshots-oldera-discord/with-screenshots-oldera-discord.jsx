import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-discord');
}

export default function WithScreenshotsOlderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-discord" />;
}
