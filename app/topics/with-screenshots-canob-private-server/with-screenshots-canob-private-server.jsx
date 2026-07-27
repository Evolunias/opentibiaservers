import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-canob-private-server');
}

export default function WithScreenshotsCanobPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-canob-private-server" />;
}
