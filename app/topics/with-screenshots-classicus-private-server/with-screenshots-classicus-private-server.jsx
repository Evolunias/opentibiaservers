import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-private-server');
}

export default function WithScreenshotsClassicusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-private-server" />;
}
