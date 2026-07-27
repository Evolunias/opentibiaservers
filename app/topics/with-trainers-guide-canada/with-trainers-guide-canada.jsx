import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-canada');
}

export default function WithTrainersGuideCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-canada" />;
}
