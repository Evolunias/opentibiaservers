import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-north-america');
}

export default function WithTrainersWikiNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-north-america" />;
}
