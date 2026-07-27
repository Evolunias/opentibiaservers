import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-usa');
}

export default function WithTrainersServerUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-usa" />;
}
