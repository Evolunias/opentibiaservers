import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-north-america');
}

export default function WithTrainersOtServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-north-america" />;
}
