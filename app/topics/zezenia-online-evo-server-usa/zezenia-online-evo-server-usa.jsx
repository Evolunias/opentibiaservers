import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-usa');
}

export default function ZezeniaOnlineEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-usa" />;
}
