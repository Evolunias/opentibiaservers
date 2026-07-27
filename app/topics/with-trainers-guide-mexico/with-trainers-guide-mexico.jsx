import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-mexico');
}

export default function WithTrainersGuideMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-mexico" />;
}
