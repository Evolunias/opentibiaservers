import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-6-non-pvp-server');
}

export default function ZezeniaOnline76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-6-non-pvp-server" />;
}
