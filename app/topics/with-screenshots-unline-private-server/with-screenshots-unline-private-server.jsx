import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-private-server');
}

export default function WithScreenshotsUnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-private-server" />;
}
