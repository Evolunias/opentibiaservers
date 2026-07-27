import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-argentina-server');
}

export default function ZezeniaOnlineArgentinaServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-argentina-server" />;
}
