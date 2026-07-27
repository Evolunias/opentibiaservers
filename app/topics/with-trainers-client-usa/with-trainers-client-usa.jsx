import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-usa');
}

export default function WithTrainersClientUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-usa" />;
}
