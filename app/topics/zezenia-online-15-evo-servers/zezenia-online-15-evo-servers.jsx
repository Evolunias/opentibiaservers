import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-15-evo-servers');
}

export default function ZezeniaOnline15EvoServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-15-evo-servers" />;
}
