import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-uk');
}

export default function WithTrainersClientUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-uk" />;
}
