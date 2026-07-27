import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-private-server');
}

export default function WithScreenshotsArchlightPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-private-server" />;
}
