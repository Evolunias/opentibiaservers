import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-south-america');
}

export default function WithTrainersWikiSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-south-america" />;
}
