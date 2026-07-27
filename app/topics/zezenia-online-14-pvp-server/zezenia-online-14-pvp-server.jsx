import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-14-pvp-server');
}

export default function ZezeniaOnline14PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-14-pvp-server" />;
}
