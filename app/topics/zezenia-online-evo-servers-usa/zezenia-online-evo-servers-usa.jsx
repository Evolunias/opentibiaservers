import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-evo-servers-usa');
}

export default function ZezeniaOnlineEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-evo-servers-usa" />;
}
