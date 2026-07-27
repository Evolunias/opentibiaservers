import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-chile-servers');
}

export default function ZezeniaOnlineChileServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-chile-servers" />;
}
