import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-9-6-pvp-server');
}

export default function ZezeniaOnline96PvpServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-9-6-pvp-server" />;
}
