import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-germany');
}

export default function ZezeniaOnlineEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-germany" />;
}
