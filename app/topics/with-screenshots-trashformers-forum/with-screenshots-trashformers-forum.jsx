import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-forum');
}

export default function WithScreenshotsTrashformersForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-forum" />;
}
