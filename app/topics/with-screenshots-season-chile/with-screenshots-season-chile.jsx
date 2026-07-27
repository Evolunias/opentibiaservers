import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-chile');
}

export default function WithScreenshotsSeasonChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-chile" />;
}
