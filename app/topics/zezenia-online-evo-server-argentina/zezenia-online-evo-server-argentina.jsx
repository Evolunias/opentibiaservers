import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-argentina');
}

export default function ZezeniaOnlineEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-argentina" />;
}
