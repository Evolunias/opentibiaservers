import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-wiki-chile');
}

export default function WithScreenshotsWikiChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-wiki-chile" />;
}
