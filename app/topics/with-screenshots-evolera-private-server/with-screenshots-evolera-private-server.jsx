import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-private-server');
}

export default function WithScreenshotsEvoleraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-private-server" />;
}
