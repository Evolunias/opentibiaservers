import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-guide');
}

export default function WithScreenshotsEvoleraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-guide" />;
}
