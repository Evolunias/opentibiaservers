import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-pvp-server');
}

export default function ZezeniaOnline12PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-pvp-server" />;
}
