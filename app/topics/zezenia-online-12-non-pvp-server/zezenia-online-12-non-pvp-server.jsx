import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-non-pvp-server');
}

export default function ZezeniaOnline12NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-non-pvp-server" />;
}
