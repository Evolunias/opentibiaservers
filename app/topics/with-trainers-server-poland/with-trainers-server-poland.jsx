import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-server-poland');
}

export default function WithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-server-poland" />;
}
