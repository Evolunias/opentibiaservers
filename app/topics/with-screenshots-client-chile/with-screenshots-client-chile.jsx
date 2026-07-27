import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-client-chile');
}

export default function WithScreenshotsClientChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-client-chile" />;
}
