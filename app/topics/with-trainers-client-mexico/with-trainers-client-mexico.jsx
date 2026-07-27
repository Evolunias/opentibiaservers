import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-mexico');
}

export default function WithTrainersClientMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-mexico" />;
}
