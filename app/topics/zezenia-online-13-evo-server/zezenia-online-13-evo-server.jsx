import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-13-evo-server');
}

export default function ZezeniaOnline13EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-13-evo-server" />;
}
