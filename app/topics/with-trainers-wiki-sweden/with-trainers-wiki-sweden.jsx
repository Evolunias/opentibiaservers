import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-sweden');
}

export default function WithTrainersWikiSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-sweden" />;
}
