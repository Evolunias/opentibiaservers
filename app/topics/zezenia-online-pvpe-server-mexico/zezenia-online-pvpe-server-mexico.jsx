import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvpe-server-mexico');
}

export default function ZezeniaOnlinePvpeServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvpe-server-mexico" />;
}
