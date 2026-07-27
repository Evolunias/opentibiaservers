import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-11-non-pvp-server');
}

export default function ZezeniaOnline11NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-11-non-pvp-server" />;
}
