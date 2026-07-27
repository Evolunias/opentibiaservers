import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-mexico');
}

export default function WithTrainersServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-mexico" />;
}
