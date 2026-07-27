import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-germany');
}

export default function WithTrainersGuideGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-germany" />;
}
