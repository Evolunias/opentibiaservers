import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-client');
}

export default function WithScreenshotsTibijkaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-client" />;
}
