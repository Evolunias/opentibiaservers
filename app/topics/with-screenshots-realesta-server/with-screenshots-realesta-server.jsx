import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-server');
}

export default function WithScreenshotsRealestaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-server" />;
}
