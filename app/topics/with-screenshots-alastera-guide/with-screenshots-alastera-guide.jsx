import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-alastera-guide');
}

export default function WithScreenshotsAlasteraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-alastera-guide" />;
}
