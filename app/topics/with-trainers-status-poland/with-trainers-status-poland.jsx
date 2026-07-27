import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-poland');
}

export default function WithTrainersStatusPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-poland" />;
}
