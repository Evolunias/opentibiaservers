import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-mexico');
}

export default function ZezeniaOnlineEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-mexico" />;
}
