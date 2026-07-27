import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-13-non-pvp-server');
}

export default function ZezeniaOnline13NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-13-non-pvp-server" />;
}
