import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nostalther-discord');
}

export default function WithScreenshotsNostaltherDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nostalther-discord" />;
}
