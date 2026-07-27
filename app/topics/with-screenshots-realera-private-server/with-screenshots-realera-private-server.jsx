import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-private-server');
}

export default function WithScreenshotsRealeraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-private-server" />;
}
