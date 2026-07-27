import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-uk');
}

export default function WithTrainersServerUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-uk" />;
}
