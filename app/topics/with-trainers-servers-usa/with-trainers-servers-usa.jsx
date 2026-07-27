import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-usa');
}

export default function WithTrainersServersUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-usa" />;
}
