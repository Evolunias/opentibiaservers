import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-germany');
}

export default function WithScreenshotsGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-germany" />;
}
