import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-uk');
}

export default function WithTrainersWikiUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-uk" />;
}
