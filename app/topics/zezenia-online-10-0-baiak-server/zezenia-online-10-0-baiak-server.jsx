import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-10-0-baiak-server');
}

export default function ZezeniaOnline100BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-10-0-baiak-server" />;
}
