import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-9-6-evo-server');
}

export default function ZezeniaOnline96EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-9-6-evo-server" />;
}
