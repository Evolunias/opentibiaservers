import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-wiki-brazil');
}

export default function WithTrainersWikiBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-wiki-brazil" />;
}
