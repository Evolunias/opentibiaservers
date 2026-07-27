import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-trashformers-rules');
}

export default function WithScreenshotsTrashformersRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-trashformers-rules" />;
}
