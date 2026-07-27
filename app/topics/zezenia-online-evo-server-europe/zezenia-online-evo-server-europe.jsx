import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-europe');
}

export default function ZezeniaOnlineEvoServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-europe" />;
}
