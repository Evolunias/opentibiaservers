import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-latin-america');
}

export default function WithTrainersOtServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-latin-america" />;
}
