import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-1-pvp-server');
}

export default function ZezeniaOnline71PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-1-pvp-server" />;
}
