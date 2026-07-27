import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-discord');
}

export default function WithScreenshotsAlasteraDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-discord" />;
}
