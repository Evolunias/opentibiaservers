import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-midhem-private-server');
}

export default function WithScreenshotsMidhemPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-midhem-private-server" />;
}
