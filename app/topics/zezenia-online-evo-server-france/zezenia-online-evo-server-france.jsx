import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-france');
}

export default function ZezeniaOnlineEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-france" />;
}
