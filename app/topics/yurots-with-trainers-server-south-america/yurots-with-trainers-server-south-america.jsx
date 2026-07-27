import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-south-america');
}

export default function YurotsWithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-south-america" />;
}
