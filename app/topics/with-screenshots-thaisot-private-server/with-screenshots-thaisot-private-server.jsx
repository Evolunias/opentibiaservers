import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-private-server');
}

export default function WithScreenshotsThaisotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-private-server" />;
}
