import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-sweden-server');
}

export default function ZezeniaOnlineSwedenServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-sweden-server" />;
}
