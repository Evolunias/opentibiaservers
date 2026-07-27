import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-brazil');
}

export default function YurotsWithTrainersServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-brazil" />;
}
