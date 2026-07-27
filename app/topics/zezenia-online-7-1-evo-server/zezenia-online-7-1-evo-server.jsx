import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-1-evo-server');
}

export default function ZezeniaOnline71EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-1-evo-server" />;
}
