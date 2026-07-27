import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-1-evo-server');
}

export default function ZezeniaOnline81EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-1-evo-server" />;
}
