import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-non-pvp-server');
}

export default function ZezeniaOnline15NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-non-pvp-server" />;
}
