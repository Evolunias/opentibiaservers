import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-germany');
}

export default function ZezeniaOnlineBaiakServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-germany" />;
}
