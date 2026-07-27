import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-ots');
}

export default function WithScreenshotsTibijkaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-ots" />;
}
