import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-latin-america');
}

export default function WithTrainersWikiLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-latin-america" />;
}
