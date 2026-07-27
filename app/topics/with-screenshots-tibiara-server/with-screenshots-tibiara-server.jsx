import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-server');
}

export default function WithScreenshotsTibiaraServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-server" />;
}
