import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-discord');
}

export default function WithScreenshotsSerenityDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-discord" />;
}
