import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-usa');
}

export default function WithTrainersStatusUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-usa" />;
}
