import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-latin-america');
}

export default function ZezeniaOnlineBaiakServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-latin-america" />;
}
