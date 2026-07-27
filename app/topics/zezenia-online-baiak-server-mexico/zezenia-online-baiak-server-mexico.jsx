import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-baiak-server-mexico');
}

export default function ZezeniaOnlineBaiakServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-baiak-server-mexico" />;
}
