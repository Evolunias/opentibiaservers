import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-uk');
}

export default function YurotsWithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-uk" />;
}
