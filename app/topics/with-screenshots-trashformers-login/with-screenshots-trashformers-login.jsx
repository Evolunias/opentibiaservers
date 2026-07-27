import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-login');
}

export default function WithScreenshotsTrashformersLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-login" />;
}
