import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-guide');
}

export default function WithScreenshotsTrashformersGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-guide" />;
}
