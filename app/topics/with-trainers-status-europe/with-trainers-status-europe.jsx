import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-europe');
}

export default function WithTrainersStatusEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-europe" />;
}
