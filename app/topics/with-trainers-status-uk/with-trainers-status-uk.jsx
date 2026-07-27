import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-uk');
}

export default function WithTrainersStatusUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-uk" />;
}
