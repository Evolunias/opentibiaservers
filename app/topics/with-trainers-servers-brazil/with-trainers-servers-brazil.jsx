import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-brazil');
}

export default function WithTrainersServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-brazil" />;
}
