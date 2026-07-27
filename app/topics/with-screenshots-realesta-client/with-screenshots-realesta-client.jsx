import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-client');
}

export default function WithScreenshotsRealestaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-client" />;
}
