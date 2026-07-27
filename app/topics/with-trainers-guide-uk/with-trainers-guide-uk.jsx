import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-uk');
}

export default function WithTrainersGuideUkKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-uk" />;
}
