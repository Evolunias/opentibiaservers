import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-trainers-server-germany');
}

export default function ZuneraOtWithTrainersServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-trainers-server-germany" />;
}
