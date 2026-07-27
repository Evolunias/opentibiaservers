import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-latin-america');
}

export default function WithTrainersServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-latin-america" />;
}
