import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-germany');
}

export default function WithTrainersWikiGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-germany" />;
}
