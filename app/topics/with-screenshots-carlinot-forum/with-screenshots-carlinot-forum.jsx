import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-carlinot-forum');
}

export default function WithScreenshotsCarlinotForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-carlinot-forum" />;
}
