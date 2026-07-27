import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-server');
}

export default function WithScreenshotsRealeraServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-server" />;
}
