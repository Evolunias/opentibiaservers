import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-brazil');
}

export default function WithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-brazil" />;
}
