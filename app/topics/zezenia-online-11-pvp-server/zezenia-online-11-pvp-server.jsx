import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-11-pvp-server');
}

export default function ZezeniaOnline11PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-11-pvp-server" />;
}
