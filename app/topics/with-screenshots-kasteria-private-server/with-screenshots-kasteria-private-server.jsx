import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-private-server');
}

export default function WithScreenshotsKasteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-private-server" />;
}
