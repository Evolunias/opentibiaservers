import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-brazil');
}

export default function ZezeniaOnlineBaiakServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-brazil" />;
}
