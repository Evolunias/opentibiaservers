import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-south-america');
}

export default function WithTrainersServersSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-south-america" />;
}
