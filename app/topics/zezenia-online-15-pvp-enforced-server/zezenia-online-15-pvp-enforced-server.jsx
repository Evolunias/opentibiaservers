import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-pvp-enforced-server');
}

export default function ZezeniaOnline15PvpEnforcedServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-pvp-enforced-server" />;
}
