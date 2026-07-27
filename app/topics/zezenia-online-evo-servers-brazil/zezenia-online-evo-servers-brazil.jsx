import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-servers-brazil');
}

export default function ZezeniaOnlineEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-servers-brazil" />;
}
