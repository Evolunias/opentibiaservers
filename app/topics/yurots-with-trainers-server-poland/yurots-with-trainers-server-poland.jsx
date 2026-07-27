import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-poland');
}

export default function YurotsWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-poland" />;
}
