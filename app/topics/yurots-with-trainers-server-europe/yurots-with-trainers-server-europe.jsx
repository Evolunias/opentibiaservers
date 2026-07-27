import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-europe');
}

export default function YurotsWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-europe" />;
}
