import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-poland');
}

export default function WithTrainersWikiPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-poland" />;
}
