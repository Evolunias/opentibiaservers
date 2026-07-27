import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-private-server');
}

export default function WithScreenshotsTibiamePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-private-server" />;
}
