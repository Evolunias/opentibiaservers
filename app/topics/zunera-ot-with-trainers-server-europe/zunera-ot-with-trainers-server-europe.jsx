import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-trainers-server-europe');
}

export default function ZuneraOtWithTrainersServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-trainers-server-europe" />;
}
