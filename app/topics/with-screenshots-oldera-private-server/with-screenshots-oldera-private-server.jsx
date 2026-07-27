import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-private-server');
}

export default function WithScreenshotsOlderaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-private-server" />;
}
