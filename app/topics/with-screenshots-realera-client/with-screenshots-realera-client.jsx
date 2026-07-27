import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-client');
}

export default function WithScreenshotsRealeraClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-client" />;
}
