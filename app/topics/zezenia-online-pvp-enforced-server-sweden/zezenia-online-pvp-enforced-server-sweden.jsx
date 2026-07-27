import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-enforced-server-sweden');
}

export default function ZezeniaOnlinePvpEnforcedServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-enforced-server-sweden" />;
}
