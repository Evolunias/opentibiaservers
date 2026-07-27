import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-server');
}

export default function WithScreenshotsTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-server" />;
}
