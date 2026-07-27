import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-north-america');
}

export default function WithTrainersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-north-america" />;
}
