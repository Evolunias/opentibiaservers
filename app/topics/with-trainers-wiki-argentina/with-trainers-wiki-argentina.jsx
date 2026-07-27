import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-argentina');
}

export default function WithTrainersWikiArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-argentina" />;
}
