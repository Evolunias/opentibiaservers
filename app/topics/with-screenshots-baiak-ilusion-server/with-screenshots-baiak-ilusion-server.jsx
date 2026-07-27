import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-baiak-ilusion-server');
}

export default function WithScreenshotsBaiakIlusionServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-baiak-ilusion-server" />;
}
