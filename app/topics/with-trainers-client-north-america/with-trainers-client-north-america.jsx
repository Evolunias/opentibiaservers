import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-north-america');
}

export default function WithTrainersClientNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-north-america" />;
}
