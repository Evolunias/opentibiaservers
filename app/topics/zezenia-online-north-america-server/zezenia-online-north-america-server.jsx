import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-north-america-server');
}

export default function ZezeniaOnlineNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-north-america-server" />;
}
