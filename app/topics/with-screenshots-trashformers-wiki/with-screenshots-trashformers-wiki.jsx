import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-wiki');
}

export default function WithScreenshotsTrashformersWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-wiki" />;
}
