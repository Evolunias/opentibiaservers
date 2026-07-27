import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-client');
}

export default function WithScreenshotsTrashformersClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-client" />;
}
