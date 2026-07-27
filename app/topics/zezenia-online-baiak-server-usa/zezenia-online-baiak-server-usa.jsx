import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-usa');
}

export default function ZezeniaOnlineBaiakServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-usa" />;
}
