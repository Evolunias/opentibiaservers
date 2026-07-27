import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-evo-server');
}

export default function ZezeniaOnline15EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-evo-server" />;
}
