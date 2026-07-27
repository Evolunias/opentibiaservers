import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-canada-server');
}

export default function ZezeniaOnlineCanadaServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-canada-server" />;
}
