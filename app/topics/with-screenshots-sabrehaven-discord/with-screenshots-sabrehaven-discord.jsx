import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-discord');
}

export default function WithScreenshotsSabrehavenDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-discord" />;
}
