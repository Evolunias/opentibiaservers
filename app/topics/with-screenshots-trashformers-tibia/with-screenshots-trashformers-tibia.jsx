import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-tibia');
}

export default function WithScreenshotsTrashformersTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-tibia" />;
}
