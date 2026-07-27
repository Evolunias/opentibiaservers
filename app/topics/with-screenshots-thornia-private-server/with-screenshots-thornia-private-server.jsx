import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-private-server');
}

export default function WithScreenshotsThorniaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-private-server" />;
}
