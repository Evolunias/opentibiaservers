import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-0-evo-server');
}

export default function ZezeniaOnline80EvoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-0-evo-server" />;
}
