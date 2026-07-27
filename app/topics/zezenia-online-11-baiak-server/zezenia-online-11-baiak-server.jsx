import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-11-baiak-server');
}

export default function ZezeniaOnline11BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-11-baiak-server" />;
}
