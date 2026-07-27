import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-latin-america');
}

export default function WithTrainersClientLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-latin-america" />;
}
