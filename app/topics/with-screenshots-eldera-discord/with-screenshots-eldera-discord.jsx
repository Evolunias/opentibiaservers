import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-discord');
}

export default function WithScreenshotsElderaDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-discord" />;
}
