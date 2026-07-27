import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-usa');
}

export default function WithScreenshotsGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-usa" />;
}
