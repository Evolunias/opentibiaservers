import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-server');
}

export default function WithScreenshotsTibijkaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-server" />;
}
