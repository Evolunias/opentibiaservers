import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-discord');
}

export default function WithScreenshotsAmeriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-discord" />;
}
