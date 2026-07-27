import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-discord');
}

export default function WithScreenshotsBlazeraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-discord" />;
}
