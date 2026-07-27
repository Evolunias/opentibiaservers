import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-guide');
}

export default function WithScreenshotsTibianusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-guide" />;
}
