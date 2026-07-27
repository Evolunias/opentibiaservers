import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-sweden');
}

export default function ZezeniaOnlineEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-sweden" />;
}
