import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-training');
}

export default function ZuneraOtTrainingKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-training" />;
}
