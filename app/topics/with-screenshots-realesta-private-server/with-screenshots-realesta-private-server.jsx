import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-private-server');
}

export default function WithScreenshotsRealestaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-private-server" />;
}
