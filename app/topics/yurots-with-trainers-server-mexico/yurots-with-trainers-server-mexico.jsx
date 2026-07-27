import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-mexico');
}

export default function YurotsWithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-mexico" />;
}
