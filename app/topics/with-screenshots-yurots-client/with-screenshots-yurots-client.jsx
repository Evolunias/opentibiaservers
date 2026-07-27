import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-yurots-client');
}

export default function WithScreenshotsYurotsClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-yurots-client" />;
}
