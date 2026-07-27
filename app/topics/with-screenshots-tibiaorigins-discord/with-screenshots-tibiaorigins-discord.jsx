import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiaorigins-discord');
}

export default function WithScreenshotsTibiaoriginsDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiaorigins-discord" />;
}
