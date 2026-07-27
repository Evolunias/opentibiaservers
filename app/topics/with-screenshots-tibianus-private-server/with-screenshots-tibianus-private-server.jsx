import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-private-server');
}

export default function WithScreenshotsTibianusPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-private-server" />;
}
