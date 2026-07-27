import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-europe');
}

export default function WithTrainersGuideEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-europe" />;
}
