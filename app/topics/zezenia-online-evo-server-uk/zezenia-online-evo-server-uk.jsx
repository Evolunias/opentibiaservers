import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-uk');
}

export default function ZezeniaOnlineEvoServerUkKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-uk" />;
}
