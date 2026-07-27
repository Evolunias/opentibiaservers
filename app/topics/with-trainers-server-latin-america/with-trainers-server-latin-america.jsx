import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-latin-america');
}

export default function WithTrainersServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-latin-america" />;
}
