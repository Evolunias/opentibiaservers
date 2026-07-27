import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-private-server');
}

export default function WithScreenshotsNepreniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-private-server" />;
}
