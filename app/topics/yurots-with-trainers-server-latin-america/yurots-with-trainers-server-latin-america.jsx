import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-latin-america');
}

export default function YurotsWithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-latin-america" />;
}
