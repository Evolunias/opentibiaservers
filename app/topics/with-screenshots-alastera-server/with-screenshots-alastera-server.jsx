import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-server');
}

export default function WithScreenshotsAlasteraServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-server" />;
}
