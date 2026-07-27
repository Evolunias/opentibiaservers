import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-open-tibia');
}

export default function WithScreenshotsTrashformersOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-open-tibia" />;
}
