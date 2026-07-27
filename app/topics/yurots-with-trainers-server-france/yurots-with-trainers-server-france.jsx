import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-trainers-server-france');
}

export default function YurotsWithTrainersServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-trainers-server-france" />;
}
