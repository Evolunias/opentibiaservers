import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-south-america');
}

export default function WithTrainersServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-south-america" />;
}
