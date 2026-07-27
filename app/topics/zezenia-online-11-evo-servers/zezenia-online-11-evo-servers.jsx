import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-11-evo-servers');
}

export default function ZezeniaOnline11EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-11-evo-servers" />;
}
