import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-latin-america-server');
}

export default function ZezeniaOnlineLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-latin-america-server" />;
}
