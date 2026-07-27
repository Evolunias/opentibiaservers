import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-usa-server');
}

export default function ZezeniaOnlineUsaServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-usa-server" />;
}
