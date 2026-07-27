import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-luminera-private-server');
}

export default function WithScreenshotsLumineraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-luminera-private-server" />;
}
