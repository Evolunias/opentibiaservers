import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka');
}

export default function WithScreenshotsTibijkaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka" />;
}
