import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-shadowcores-private-server');
}

export default function WithScreenshotsShadowcoresPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-shadowcores-private-server" />;
}
