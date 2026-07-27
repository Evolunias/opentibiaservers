import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-germany');
}

export default function YurotsWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-germany" />;
}
