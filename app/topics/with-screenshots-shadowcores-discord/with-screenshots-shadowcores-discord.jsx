import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-discord');
}

export default function WithScreenshotsShadowcoresDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-discord" />;
}
