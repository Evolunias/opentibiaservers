import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-xanteria-private-server');
}

export default function WithScreenshotsXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-xanteria-private-server" />;
}
