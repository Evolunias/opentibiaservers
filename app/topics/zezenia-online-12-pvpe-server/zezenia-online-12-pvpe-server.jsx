import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-pvpe-server');
}

export default function ZezeniaOnline12PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-pvpe-server" />;
}
