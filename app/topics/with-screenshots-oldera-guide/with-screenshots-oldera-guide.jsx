import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-oldera-guide');
}

export default function WithScreenshotsOlderaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-oldera-guide" />;
}
