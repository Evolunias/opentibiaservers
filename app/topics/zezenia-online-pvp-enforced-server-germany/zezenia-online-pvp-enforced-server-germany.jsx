import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-enforced-server-germany');
}

export default function ZezeniaOnlinePvpEnforcedServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-enforced-server-germany" />;
}
