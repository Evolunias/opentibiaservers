import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-status-chile');
}

export default function WithScreenshotsStatusChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-status-chile" />;
}
