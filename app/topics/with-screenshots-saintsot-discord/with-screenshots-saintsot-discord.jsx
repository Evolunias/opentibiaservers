import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-discord');
}

export default function WithScreenshotsSaintsotDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-discord" />;
}
