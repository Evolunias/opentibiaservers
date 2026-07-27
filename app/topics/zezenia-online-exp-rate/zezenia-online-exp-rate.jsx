import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-exp-rate');
}

export default function ZezeniaOnlineExpRateKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-exp-rate" />;
}
