import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-brazil');
}

export default function ZezeniaOnlineEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-brazil" />;
}
