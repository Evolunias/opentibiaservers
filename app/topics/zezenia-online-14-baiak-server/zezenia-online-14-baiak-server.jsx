import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-14-baiak-server');
}

export default function ZezeniaOnline14BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-14-baiak-server" />;
}
