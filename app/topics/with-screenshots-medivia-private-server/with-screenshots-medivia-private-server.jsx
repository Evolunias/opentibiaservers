import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-private-server');
}

export default function WithScreenshotsMediviaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-private-server" />;
}
