import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-trainers-server-poland');
}

export default function ZuneraOtWithTrainersServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-trainers-server-poland" />;
}
