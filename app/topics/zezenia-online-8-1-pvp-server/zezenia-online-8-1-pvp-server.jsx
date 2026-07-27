import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-1-pvp-server');
}

export default function ZezeniaOnline81PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-1-pvp-server" />;
}
