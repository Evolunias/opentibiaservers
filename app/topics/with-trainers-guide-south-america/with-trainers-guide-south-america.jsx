import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-south-america');
}

export default function WithTrainersGuideSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-south-america" />;
}
