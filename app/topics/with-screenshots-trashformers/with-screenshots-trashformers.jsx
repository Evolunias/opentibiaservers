import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers');
}

export default function WithScreenshotsTrashformersKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers" />;
}
