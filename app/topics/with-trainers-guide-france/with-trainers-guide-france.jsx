import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-france');
}

export default function WithTrainersGuideFranceKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-france" />;
}
