import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-private-server');
}

export default function WithScreenshotsTibijkaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-private-server" />;
}
