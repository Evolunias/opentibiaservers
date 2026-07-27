import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-brazil');
}

export default function WithTrainersClientBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-brazil" />;
}
