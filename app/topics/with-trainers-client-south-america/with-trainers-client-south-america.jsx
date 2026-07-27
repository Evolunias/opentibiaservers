import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-south-america');
}

export default function WithTrainersClientSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-south-america" />;
}
