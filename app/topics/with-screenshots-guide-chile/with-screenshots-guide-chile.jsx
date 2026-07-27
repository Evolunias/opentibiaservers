import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-guide-chile');
}

export default function WithScreenshotsGuideChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-guide-chile" />;
}
