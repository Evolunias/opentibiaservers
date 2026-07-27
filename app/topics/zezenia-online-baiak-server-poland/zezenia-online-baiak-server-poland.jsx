import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-poland');
}

export default function ZezeniaOnlineBaiakServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-poland" />;
}
