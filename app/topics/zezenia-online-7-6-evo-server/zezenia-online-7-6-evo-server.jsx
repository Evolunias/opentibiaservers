import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-7-6-evo-server');
}

export default function ZezeniaOnline76EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-7-6-evo-server" />;
}
