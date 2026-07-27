import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-guide');
}

export default function WithScreenshotsSaintsotGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-guide" />;
}
