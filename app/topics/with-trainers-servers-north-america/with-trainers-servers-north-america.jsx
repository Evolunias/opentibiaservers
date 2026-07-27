import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-north-america');
}

export default function WithTrainersServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-north-america" />;
}
