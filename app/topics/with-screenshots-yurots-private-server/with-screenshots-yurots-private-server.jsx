import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-private-server');
}

export default function WithScreenshotsYurotsPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-private-server" />;
}
