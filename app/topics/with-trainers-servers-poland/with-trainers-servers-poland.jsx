import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-servers-poland');
}

export default function WithTrainersServersPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-servers-poland" />;
}
