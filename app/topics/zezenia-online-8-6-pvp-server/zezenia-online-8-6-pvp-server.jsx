import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-6-pvp-server');
}

export default function ZezeniaOnline86PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-6-pvp-server" />;
}
