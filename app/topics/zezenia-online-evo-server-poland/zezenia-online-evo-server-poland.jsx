import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-server-poland');
}

export default function ZezeniaOnlineEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-server-poland" />;
}
