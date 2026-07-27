import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-private-server');
}

export default function WithScreenshotsAlasteraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-private-server" />;
}
