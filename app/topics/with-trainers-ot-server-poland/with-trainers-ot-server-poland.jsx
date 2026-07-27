import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-ot-server-poland');
}

export default function WithTrainersOtServerPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-ot-server-poland" />;
}
