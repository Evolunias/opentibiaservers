import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-private-server');
}

export default function WithScreenshotsTibiascapePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-private-server" />;
}
