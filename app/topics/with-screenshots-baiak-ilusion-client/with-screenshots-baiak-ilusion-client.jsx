import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-baiak-ilusion-client');
}

export default function WithScreenshotsBaiakIlusionClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-baiak-ilusion-client" />;
}
