import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-brazil');
}

export default function WithTrainersGuideBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-brazil" />;
}
