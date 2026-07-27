import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-private-server');
}

export default function WithScreenshotsAmeriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-private-server" />;
}
