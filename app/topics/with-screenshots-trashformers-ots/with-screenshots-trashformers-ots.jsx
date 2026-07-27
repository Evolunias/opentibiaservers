import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-ots');
}

export default function WithScreenshotsTrashformersOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-ots" />;
}
