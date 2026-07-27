import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-latin-america');
}

export default function WithScreenshotsGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-latin-america" />;
}
