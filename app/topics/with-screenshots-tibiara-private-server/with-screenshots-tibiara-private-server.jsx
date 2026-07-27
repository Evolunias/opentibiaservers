import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-private-server');
}

export default function WithScreenshotsTibiaraPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-private-server" />;
}
