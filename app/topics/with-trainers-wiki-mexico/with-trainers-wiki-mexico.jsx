import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-mexico');
}

export default function WithTrainersWikiMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-mexico" />;
}
