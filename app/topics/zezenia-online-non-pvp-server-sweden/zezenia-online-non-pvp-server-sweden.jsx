import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-sweden');
}

export default function ZezeniaOnlineNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-sweden" />;
}
