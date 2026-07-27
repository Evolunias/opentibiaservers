import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-discord-brazil');
}

export default function WithScreenshotsDiscordBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-discord-brazil" />;
}
