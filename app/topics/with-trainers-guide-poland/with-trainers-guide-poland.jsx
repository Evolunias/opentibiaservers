import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-poland');
}

export default function WithTrainersGuidePolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-poland" />;
}
