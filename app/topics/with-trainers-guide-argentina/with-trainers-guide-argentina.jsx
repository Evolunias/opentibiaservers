import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-argentina');
}

export default function WithTrainersGuideArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-argentina" />;
}
