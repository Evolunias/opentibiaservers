import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-germany');
}

export default function ZezeniaOnlinePvpServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-germany" />;
}
