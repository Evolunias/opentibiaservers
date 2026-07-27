import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-sweden');
}

export default function ZezeniaOnlinePvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-sweden" />;
}
