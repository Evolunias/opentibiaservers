import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-12-baiak-server');
}

export default function ZezeniaOnline12BaiakServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-12-baiak-server" />;
}
