import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-north-america');
}

export default function ZezeniaOnlineEvoServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-north-america" />;
}
