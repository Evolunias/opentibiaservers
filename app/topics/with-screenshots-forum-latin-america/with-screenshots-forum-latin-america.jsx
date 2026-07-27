import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-forum-latin-america');
}

export default function WithScreenshotsForumLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-forum-latin-america" />;
}
