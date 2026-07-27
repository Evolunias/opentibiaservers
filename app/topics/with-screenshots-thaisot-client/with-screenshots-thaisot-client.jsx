import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-client');
}

export default function WithScreenshotsThaisotClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-client" />;
}
