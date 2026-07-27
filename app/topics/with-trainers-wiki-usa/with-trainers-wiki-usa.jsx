import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-usa');
}

export default function WithTrainersWikiUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-usa" />;
}
