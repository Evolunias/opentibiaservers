import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-4-non-pvp-server');
}

export default function ZezeniaOnline84NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-4-non-pvp-server" />;
}
