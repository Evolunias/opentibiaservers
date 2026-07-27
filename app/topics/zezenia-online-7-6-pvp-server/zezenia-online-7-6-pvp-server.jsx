import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-6-pvp-server');
}

export default function ZezeniaOnline76PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-6-pvp-server" />;
}
