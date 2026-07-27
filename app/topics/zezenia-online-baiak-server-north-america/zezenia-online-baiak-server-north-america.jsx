import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-north-america');
}

export default function ZezeniaOnlineBaiakServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-north-america" />;
}
