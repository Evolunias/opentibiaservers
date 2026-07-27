import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-client');
}

export default function WithScreenshotsTibianusClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-client" />;
}
