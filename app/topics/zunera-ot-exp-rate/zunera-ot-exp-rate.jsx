import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-exp-rate');
}

export default function ZuneraOtExpRateKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-exp-rate" />;
}
