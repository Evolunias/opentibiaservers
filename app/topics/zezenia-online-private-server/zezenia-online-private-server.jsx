import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-private-server');
}

export default function ZezeniaOnlinePrivateServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-private-server" />;
}
