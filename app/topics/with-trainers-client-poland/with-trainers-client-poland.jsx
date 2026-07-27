import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-client-poland');
}

export default function WithTrainersClientPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-client-poland" />;
}
