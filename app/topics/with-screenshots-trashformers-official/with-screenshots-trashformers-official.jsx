import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-official');
}

export default function WithScreenshotsTrashformersOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-official" />;
}
