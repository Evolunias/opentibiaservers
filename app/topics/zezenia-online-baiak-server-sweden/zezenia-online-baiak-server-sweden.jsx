import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-sweden');
}

export default function ZezeniaOnlineBaiakServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-sweden" />;
}
