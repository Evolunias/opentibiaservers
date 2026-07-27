import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rubinot-server');
}

export default function WithScreenshotsRubinotServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rubinot-server" />;
}
