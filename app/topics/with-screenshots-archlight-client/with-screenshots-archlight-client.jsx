import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-client');
}

export default function WithScreenshotsArchlightClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-client" />;
}
