import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-canada');
}

export default function WithTrainersWikiCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-canada" />;
}
