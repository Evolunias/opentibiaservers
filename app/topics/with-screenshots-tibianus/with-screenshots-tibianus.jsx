import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus');
}

export default function WithScreenshotsTibianusKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus" />;
}
