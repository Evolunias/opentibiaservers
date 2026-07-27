import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-13-baiak-server');
}

export default function ZezeniaOnline13BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-13-baiak-server" />;
}
