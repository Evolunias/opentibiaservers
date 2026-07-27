import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-discord');
}

export default function WithScreenshotsDemolidoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-discord" />;
}
