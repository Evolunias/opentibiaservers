import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-private-server');
}

export default function WithScreenshotsCarlinotPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-private-server" />;
}
