import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-sweden');
}

export default function WithTrainersGuideSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-sweden" />;
}
