import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-argentina-servers');
}

export default function ZezeniaOnlineArgentinaServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-argentina-servers" />;
}
