import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-client');
}

export default function WithScreenshotsOriginaltibiaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-client" />;
}
