import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-server');
}

export default function WithScreenshotsOriginaltibiaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-server" />;
}
