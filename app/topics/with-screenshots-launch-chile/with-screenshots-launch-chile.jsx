import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-launch-chile');
}

export default function WithScreenshotsLaunchChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-launch-chile" />;
}
