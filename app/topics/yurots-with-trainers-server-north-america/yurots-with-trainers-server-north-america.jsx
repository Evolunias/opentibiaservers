import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-north-america');
}

export default function YurotsWithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-north-america" />;
}
