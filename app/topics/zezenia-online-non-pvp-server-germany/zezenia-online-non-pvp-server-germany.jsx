import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-germany');
}

export default function ZezeniaOnlineNonPvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-germany" />;
}
