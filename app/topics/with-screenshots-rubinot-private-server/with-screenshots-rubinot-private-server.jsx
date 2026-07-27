import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-private-server');
}

export default function WithScreenshotsRubinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-private-server" />;
}
