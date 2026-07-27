import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-france');
}

export default function WithTrainersStatusFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-france" />;
}
