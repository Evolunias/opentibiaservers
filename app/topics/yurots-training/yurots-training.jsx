import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-training');
}

export default function YurotsTrainingKeywordPage() {
  return <StaticKeywordPage slug="yurots-training" />;
}
